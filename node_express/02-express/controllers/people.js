let { people } = require("../data");

//* get
const getPeople = (req, res) => {
  res.status(200).json({ succes: true, data: people });
};

//*post
const creatPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(401).send({ success: false, msg: "veuillez donner un nom" });
  }
  res.status(201).json({ success: true, person: name });
};

//*put
const updatePerson = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const { name } = req.body;
  console.log(req.body);
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ succes: false, msg: "pas de pers" });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      return { ...person, name };
    }
    return person;
  });
  res.status(200).send({ success: true, data: newPeople });
};

//*delete
const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ succes: false, msg: "pas de pers" });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).send({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  creatPerson,
  deletePerson,
  updatePerson,
};
