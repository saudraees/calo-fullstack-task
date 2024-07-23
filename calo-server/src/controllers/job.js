const unsplashService = require('../services/unsplash');

const MAX_RETRIES = 3
let jobs = [];
let jobQueue = [];

const executeJob = async (job) => {
    let retries = 0;
    while (retries < MAX_RETRIES) {
        try {
            const { response } = await unsplashService.getRandomPhoto();
            job.status = 'completed';
            job.result = response.urls.regular;
            return;
        } catch (error) {
            retries += 1;
            if (retries === MAX_RETRIES) {
                job.status = 'failed';
            }
        }
    }
};

const processQueue = async () => {
    if (jobQueue.length > 0) {
        const job = jobQueue.shift();
        await executeJob(job);
    }
};

module.exports = {
    async getAllJobs(req, res) {
        const jobRes = jobs.map((job) => {
            if (job.status === 'completed')
                return job.result
            else
                return job.status
        })
        return res.json(jobRes)
    },
    async getJobById(req, res) {
        const { id } = req.params
        const jobById = jobs.find((job) => job.id === id)

        if (jobById)
            return res.json(jobById.result ?? jobById.status)
        else
            return res.json({ error: `Job with ID ${id} not found` });
    },
    async createJob(req, res) {
        try {
            const delay = Math.floor(Math.random() * 55) * 5 + 5;
            const newJob = {
                id: `${jobs.length + 1}`,
                status: 'pending',
                waitTime: delay,
                result: null
            }
            jobs.push(newJob)
            jobQueue.push(newJob);

            setTimeout(async () => {
                await processQueue()
            }, delay * 1000);

            res.json(newJob.id)
        } catch (e) {
            res.status(404).json({ error: 'Failed to create a new job' })
        }
    },
}