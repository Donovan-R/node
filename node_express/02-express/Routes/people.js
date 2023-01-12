const express = require("express");
const router = express.Router();

const {
  getPeople,
  creatPerson,
  deletePerson,
  updatePerson,
} = require("../controllers/people");

router.route("/").get(getPeople).post(creatPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
