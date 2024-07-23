require('dotenv').config()
const express = require('express')
const cors = require("cors");
const jobRouter = require('./routers/job')

const app = express()
app.use(
    cors({
        origin: true,
    })
);
app.use(express.json());
app.use('/api/job', jobRouter)

app.listen(8080, () => {
    console.log('server listening on port 8080')
})