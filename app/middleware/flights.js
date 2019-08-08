const getDb = require("../db").getDb;

function fetchOriginAirport(req, res, next) {
    validateAndFetchAirport('origin', req, res, next)
}

function fetchDestinationAirport(req, res, next) {
    validateAndFetchAirport('destination', req, res, next)
}

function validateAndFetchAirport(query, req, res, next) {
    const airportCode = req.query[query];

    if (!airportCode) {
        res.statusMessage = `Missing ${query}`;
        res.status(400).end();
    } else {
        const airport = fetchAirport(airportCode);
        if (airport == null) {
            res.send({
                message: `Invalid ${query}`
            });
        } else {
            req[query] = airport;
            next();
        }
    }
}

function fetchAirport(locationCode) {
    const airports = getDb().airports;
    const foundAirports = airports.filter((air) => air['IATA 3'] === locationCode);
    if (foundAirports.length > 0) return foundAirports[0];
    return null;
}

module.exports = { fetchOriginAirport, fetchDestinationAirport };