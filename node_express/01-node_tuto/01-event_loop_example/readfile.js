const { readFile } = require("fs");

console.log("commencer");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(result);
  console.log("fin première");
});
console.log("commencer la pro");
