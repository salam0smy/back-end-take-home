const getDb = require("../db").getDb;
const { dijkstras } = require('../dijkstras');

function getBestRoute(req, res) {
    const db = getDb();
    const { origin, destination } = req;
    const result = dijkstras(origin['IATA 3'], destination['IATA 3'], db.graph);

    let returnBody = "";
    if (result.path.length <= 1) {
        returnBody = 'No Route';
    } else {
        returnBody = result.path.reduce((prev, curr, i) => {
            return i === 0 ? `${curr}` : `${prev} => ${curr}`;
        }, '');
    }

    res.send(returnBody);
}

module.exports = { getBestRoute };