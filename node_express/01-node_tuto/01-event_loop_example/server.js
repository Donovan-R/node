const http = require("http");

const server = http.createServer((req, res) => {
  console.log("événement de la requête");
  res.end("hello world");
});

server.listen(5000, () => console.log("le faisan est dans le four"));
