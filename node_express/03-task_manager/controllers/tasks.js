const db = require("../db");

//créer une tâche
const createTask = async (req, res) => {
  const { name } = req.body;
  const newTask = await db.query("INSERT INTO task(name) VALUES($1)", [name]);
  res.status(201).send("ajout");
};

//tout récupérer
const getAllTasks = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM task");

  res.status(200).json(rows);
};

//récupérer une tâche
const getTask = async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query("SELECT * FROM task WHERE task_id = $1", [
    id,
  ]);
  if (!rows[0]) {
    return res.status(404).json("rien");
  }
  res.status(200).send({ task: rows[0] });
};

//Mettre à jour
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;
  const { rowCount } = await db.query(
    "UPDATE task SET name=$1, completed=$2 WHERE task_id=$3",
    [name, completed, id]
  );
  if (rowCount === 0) {
    return res.status(404).json("rien");
  }
  res.status(200).json({ task: { task_id, name, completed } });
};

//suppression
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await db.query("DELETE FROM task WHERE task_id = $1", [
    id,
  ]);
  //le $1 etc. est une requête préparée
  if (rowCount === 0) {
    return res.status(404).json({ msg: "pas de tâches" });
  }
  res.status(200).send("supprimé");
};

module.exports = { createTask, deleteTask, updateTask, getAllTasks, getTask };
