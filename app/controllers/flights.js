const getDb = require("../db").getDb;
const { dijkstras } = require('../dijkstras');

function getBestRoute(req, res) {
    const db = getDb();
    const { origin, destination } = req;
    const result = dijkstras(origin['IATA 3'], destination['IATA 3'], db.graph);
    res.send(result);
}

module.exports = { getBestRoute };