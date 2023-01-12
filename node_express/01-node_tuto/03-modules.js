//* Modules - Code Encapsulé (il faut partager seulement le minimum)
//* CommonJS - utilisé par défaut par Node, tous les fichiers sont des modules par défaut

const { john, peter } = require("./04-name");
const sayHI = require("./05-utils");
console.log(john, peter);

sayHI(john);
sayHI(peter);
