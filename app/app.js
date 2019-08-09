const express = require("express");
const bodyParser = require('body-parser');
const port = 8080;
const { initDb } = require("./db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', require('./routes'));

async function start() {
    const db = await initDb('full');

    app.listen(port, function (err) {
        if (err) {
            throw err;
        }
        console.log("API Up and running on port " + port);
    });
}

start();