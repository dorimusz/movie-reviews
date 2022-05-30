const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
    origin: process.env.HOST, //a frontend localhostja
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));;
app.use(express.json());

//routes:
const dashboardRoutes = require('./route/dashboard');
app.use('/api/dashboards', dashboardRoutes)

module.exports = app