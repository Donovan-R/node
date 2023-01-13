require("express-async-errors");
const express = require("express");
const app = express();
require("dotenv").config();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notfound");
const errorHandler = require("./middleware/errorhandler");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("le serveur écoute");
});
