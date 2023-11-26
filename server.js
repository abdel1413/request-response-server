//const expres = require("express");
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //set the header
  res.setHeader("content-Type", "text/html");
  //set an html file
  //res.write('./views/about.html')
  let path = "./views/";
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "index.html";

      break;
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      break;

    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
  }

  fs.readFile(path, (e, data) => {
    if (e) {
      console.log("an error occured", e);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3030, "localhost", () => {
  console.log("you are listening to server  3030");
});
