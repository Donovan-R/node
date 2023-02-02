const { StatusCodes } = require('http-status-codes');
const db = require('../db');
const { BadRequestError, NotFoundError } = require('../errors');

const createJob = async (req, res) => {
  // récupère les infos du forumulaire
  const { company, position } = req.body;

  // récupère userID
  const { userID } = req.user;

  // requête : insère dans jobs
  const {
    rows: [job],
  } = await db.query(
    'insert into jobs (company, position, user_id) VALUES ($1, $2, $3) RETURNING*',
    [company, position, userID]
  );

  // retourne une réponse json { jobs, count }
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  // requête : récupère tous les jobs de l'utilisateur
  const { userID } = req.user;
  const { rows: jobs } = await db.query(
    'select * from jobs where user_id= $1',
    [userID]
  );

  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

// retourne une réponse json { jobs, count }

const getJob = async (req, res) => {
  // récupère userID et l'id du job (dans l'url)
  const { id } = req.params;
  // requête : récupère un job en particulier de l'utilisateur
  const {
    rows: [job],
  } = await db.query('select * from jobs where job_id = $1, {Number[id]}');
  // Si pas de job jeter notFoundError (il faut faut créer la classe dans /errors)
  if (!job) {
    throw new NotFoundError(`Pas de job avec l'id : ${id}`);
  }

  // retourne une réponse json { jobs }
  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  // récupère les infos du forumulaire
  const { company, position, status } = req.body;
  // récupère userID
  const { id: jobID } = req.params;

  // Si pas de company ou de position jeter une erreur mauvaise requête
  if (!company || !position) {
    throw new BadRequestError('invalide');
  }
  // requête : met à jour un job en particulier de l'utilisateur
  const {
    rows: [job],
  } = await db.query(
    'UPDATE jobs SET company = $1, position = $2, status = $3 WHERE job_id = $4 RETURNING *',
    [company, position, status, jobID]
  );
  // Si pas de user jeter notFoundError
  if (!job) {
    throw new NotFoundError(`Pas de job avec l'id : ${jobID}`);
  }
  // retourne une réponse json { jobs }
  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  // récupère les infos du forumulaire
  const { id: jobID } = req.params;

  // requête : supprimer un job particulier de l'utilisateur
  const {
    rows: [job],
  } = await db.query('DELETE FROM jobs WHERE job_id = $1 RETURNING *', [jobID]);

  // Si pas de job jeter notFoundError
  if (!job) {
    throw new NotFoundError(`Pas de job avec l'id : ${jobID}`);
  }
  // retourne une réponse json { jobs }
  res.status(StatusCodes.OK).json({ job });
};

module.exports = { createJob, getAllJobs, getJob, updateJob, deleteJob };
