require("dotenv").config();
const mongoose = require('mongoose');
const port = process.env.PORT;

const app = require('./app');

mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Movie reviews app is listening on port ${port}`)
})