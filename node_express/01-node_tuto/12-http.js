//* HTTP - setup serveur

const http = require("http");

//les 2 argts sont des objets
//le client fait une demande, le serveur répond
//req:request, res: response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("bienvenue");
  } else if (req.url === "/about") {
    res.end("histoire");
  } else {
    res.end(
      `<h1> Oups </h1>
        <p>page non trouvée </p>
        <a href="/">retourner à l'accueil</a>`
    );
  }
});

server.listen(5000);
