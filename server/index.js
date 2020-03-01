const express = require('express');
const pgdb = require('./db/pgdb');
const bp = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bp.json());

app.get('/cows', (req, res) => {
    pgdb.getAllCows()
        .then(results => res.send(results));
});

app.get('/cows/:name', (req, res) => {
    pgdb.getCow(req.params.name)
        .then(results => res.send(results));
});

app.post('/cows', (req, res) => {
    pgdb.addACow(req.body)
        .then(() => res.sendStatus(201));
});

app.listen(8080, () => console.log('Server is up on port 8080'));