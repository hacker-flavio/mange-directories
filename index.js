const express = require("express");
const path = require("path");
const http = require("http");
const app = express();

// Create a server object
const server = require("http").createServer(app);
const { exec } = require("child_process");

// Static files
app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});

// Replace 'C:\\Path\\To\\Your\\Folder' with the actual folder path you want to open.
const folderPath =
  "C:\\Users\\herre\\AppData\\Roaming\\.minecraft\\screenshots";

// Use the 'start' command to open the folder in File Explorer.
exec(`start ${folderPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening folder: ${error}`);
    return;
  }
  console.log(`Folder opened successfully: ${folderPath}`);
});

// Replace this with the full path to the Chrome executable on your system
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

// Use the full path to Chrome to open the file path in Chrome
exec(`"${chromePath}" "${folderPath}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening in Chrome: ${error}`);
    return;
  }
  console.log(`Opened in Chrome: ${folderPath}`);
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
