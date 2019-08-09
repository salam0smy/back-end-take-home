const express = require('express');
const { fetchOriginAirport, fetchDestinationAirport } = require('./middleware/flights');
const { getBestRoute } = require('./controllers/flights');
const router = express.Router();

router.get('/status', (req, res) => {
    res.send('Hello, im running! v1');
});

router.get('/route', fetchOriginAirport, fetchDestinationAirport, getBestRoute);

router.get('*', (req, res) => {
    res.send('Check your endpoint');
});

module.exports = router;
