const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log('l"utilisateur est entré en contact');
  //   console.log(req.method);
  //   console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>page d'accueil</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>à propos</h1>");
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>non trouvée</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("serveur sur écoute");
});
