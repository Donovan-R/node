const http = require("http");

//* le serveur qui émet un évènement request
const server = http.createServer();

//* le serveur écoute  l'évènement
server.on("request", () => {
  resizeBy.end("bienvenue");
});

//http.Server est une extension d'eventEmitter

server.listen(5000, () => {
  console.log("le serveur écoute");
});
