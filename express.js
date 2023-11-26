const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

app.listen(3040, () => {
  console.log("you are listening to port 3040");
});
