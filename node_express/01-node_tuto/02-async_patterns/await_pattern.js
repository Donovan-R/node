// const { readFile, writeFile } = require("fs");

// const util = require("util");
// const writeFilePromise = util.promisify(writeFile);

const { readFile, writeFile } = require("fs").promises;

// readFile("./content/first.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

//* on fait les promesses manuellement avec la fonction getText
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     await writeFilePromise(
//       "./content/result-promise.txt",
//       `c'est génial ${first} ${second}`
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
// };

//* les promesses sont faites avec l'attribut .promises
//* pattern async/ await
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-promise.txt",
      `c'est génial ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error.message);
  }
};

start();
