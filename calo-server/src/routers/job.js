const express = require('express')
const router = express.Router()
const jobController = require('../controllers/job')

/** Endpoint to fetch all jobs */
router.get('/all', async (req, res) => {
    try {
        res.status(200).json(await jobController.getCompleteJobs(req, res));
    } catch (error) {
        res.status(400).send(error.body);
    }
})

/** Endpoint to fetch all jobs */
router.get('/', async (req, res) => {
    try {
        res.status(200).json(await jobController.getAllJobs(req, res));
    } catch (error) {
        res.status(400).send(error.body);
    }
})

/** Endpoint to fetch a job by ID */
router.get('/:id', async (req, res) => {
    try {
        res.status(200).json(await jobController.getJobById(req, res));
    } catch (error) {
        res.status(400).send(error.body);
    }
})

/** Endpoint to create a new job */
router.post('/', async (req, res) => {
    try {
        res.status(200).json(await jobController.createJob(req, res));
    } catch (error) {
        res.status(400).send(error.body);
    }
})

module.exports = router