const cors = require('cors');
const express = require('express');
const app = express();

const logger = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

app.use(cors({ origin: process.env.APP_URL }))
app.use(express.json())

app.use(logger);

const userRoutes = require('./route/user')
const movieRoutes = require('./route/movie')
app.use('/api/movies', movieRoutes)
app.use('/api/user', userRoutes)

app.use(errorHandler);

module.exports = app