const express = require('express');
const { fetchOriginAirport, fetchDestinationAirport } = require('./middleware/flight');
const router = express.Router();

router.get('/status', (req, res) => {
    res.send("Hello, im running! v1");
});

router.get('/route', fetchOriginAirport, fetchDestinationAirport, (req, res) => {
    res.send('im route the route');
});

module.exports = router;
