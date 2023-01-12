const path = require("path");

//*retourne le séparateur utilisé par ma plateforme
console.log(path.sep);

const filePath = path.join("/content/", "text.txt");
console.log(filePath);

//retourne le nom du dossier/ fichier cible
const base = path.basename(filePath);
console.log(base);

//affiche le chemin
const absolute = path.resolve(__dirname, "content", "text.txt");
console.log(absolute);
