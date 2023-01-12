//* même pattern mais avec async
const { readFile, writeFile } = require("fs");

console.log("début");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `voici le résultat : ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("tâche terminée");
      }
    );
  });
});

console.log("début de la prochaine tâche");
