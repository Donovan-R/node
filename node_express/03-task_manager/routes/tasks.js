const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTask,
  updateTask,
  getAllTasks,
  getTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
