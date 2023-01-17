const StatusCodes = require('StatusCodes');
const notFound = require('../middleware/not-found');
const createJob = async (req, res) => {
  console.log(req.user);

  // récupère les infos du forumulaire
  // récupère userID
  ('insert into jobs () VALUES ($1)');

  // requête : insère dans jobs

  // retourne une réponse json { jobs, count }
  res.status(201).send('crée un job');
};

const getAllJobs = async (req, res) => {
  // requête : récupère tous les jobs de l'utilisateur
  const { jobs } = req.query;
  let queryString = 'select * from jobs';

  if (jobs) {
    queryString = `select ${jobs} from jobs`;
  }

  // retourne une réponse json { jobs, count }
  res.status(200).json({ jobs, count }).send('récupère tous les jobs');
};

const getJob = async (req, res) => {
  // récupère userID et l'id du job (dans l'url)
  const { userID, job_id } = job;
  // Si pas de job jeter notFoundError (il faut faut créer la classe dans /errors)
  if (!job) {
    res.status(404).res.json('notFound');
  }
  // requête : récupère un job en particulier de l'utilisateur

  // retourne une réponse json { jobs }
  res.send('récupère un job');
};

const updateJob = async (req, res) => {
  // récupère les infos du forumulaire
  // récupère userID

  // Si pas de company ou de position jeter une erreur mauvaise requête

  // requête : met à jour un job en particulier de l'utilisateur

  // Si pas de user jeter notFoundError

  // retourne une réponse json { jobs }
  res.send('met à jour un job');
};

const deleteJob = async (req, res) => {
  // récupère les infos du forumulaire
  // récupère userID

  // requête : supprimer un job particulier de l'utilisateur

  // Si pas de user jeter notFoundError

  // retourne une réponse json { jobs }
  res.send('supprime un job');
};

module.exports = { createJob, getAllJobs, getJob, updateJob, deleteJob };
