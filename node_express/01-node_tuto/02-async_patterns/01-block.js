const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("page accueil");
  } else if (req.url === "/about") {
    res.end("à propos");
  } else {
    res.end("page 404");
  }
});

server.listen(5000, () => {
  console.log("le serveur écoute sur le port 5000");
});
