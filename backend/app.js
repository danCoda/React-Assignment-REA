/*
Backend code.
- Runs on port 5000.
- One route: '/api/data' (GET request) for getting data.

How to start:
- 'node app' in a command prompt. 
*/

const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const fs = require('fs'); // For reading the json data file.

const app = express();
const PORT_NUMBER = 5000;
const BASE_URL = '/api';
const DATA = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf8'));

app.use(express.urlencoded({
    extended: true
})); // Be able to parse req.body.
app.use(cors()); // Allow us to communicate with our locally-run frontend.
app.use(bodyParser.json()); // Allow us to process incoming request bodies.

app.get(`${BASE_URL}/data`, (req, res) => {
    res.send(DATA);
});

app.listen(PORT_NUMBER, () => {
    console.log(`Backend running on port ${PORT_NUMBER}!`);
});