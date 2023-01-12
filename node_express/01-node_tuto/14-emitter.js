const EventEmitter = require("events");
const customEmitter = new EventEmitter();

//* on - écoute un évènement
//* emit - émet un évènement
customEmitter.on("response", (name, id) => {
  console.log(`données reçues: ${name} ${id}`);
});
customEmitter.on("respone", () => {
  console.log("encore");
});

// l'event de on doit correspondre à celui d'emit

//! l'ordre a son importance. Il faut d'abord écouter l'event avant de l'émettre
customEmitter.emit("response", "john", 34);
