const { readFileSync, writeFileSync, read } = require("fs");

console.log("début");

//lire un fichier
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

//*écrire dans un fichier
writeFileSync(
  "./content/result-sync.txt",
  `voici le résultat ${first} ${second}`,
  { flag: "a" }
);

console.log("tâche terminée");
