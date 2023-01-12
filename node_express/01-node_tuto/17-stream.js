const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   const text = fs.readFileSync("./content.big.txt", "utf8");
  //   res.end(text);
  const fileStream = fs.createReadStream("./content/big.txt");

  fileStream.on("open", () => {
    // pipe passe les données de read à write
    // on peut ainsi morceler
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    res.end(err.message);
  });
});

server.listen(5000, () => {
  console.log("le serveur écoute");
});
