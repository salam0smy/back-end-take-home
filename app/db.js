const { loadFile, buildGraph } = require('./dataLoader');

let _db;

const initDb = async (env = 'test') => {
    if (_db) {
        console.warn("Trying to init DB again!");
        return callback(null, _db);
    }

    const airportsCsv = `data/${env}/airports.csv`;
    const airlinesCsv = `data/${env}/airlines.csv`;
    const routesCsv = `data/${env}/routes.csv`;

    const routesPromise = loadFile(routesCsv);
    const airportsPromise = loadFile(airportsCsv);
    const airlinesPromise = loadFile(airlinesCsv);

    const [routes, airports, airlines] = await Promise.all([routesPromise, airportsPromise, airlinesPromise])

    const graph = buildGraph(airports, routes);

    _db = { routes, airports, airlines, graph };

    return _db;
}

const getDb = () => {
    if (!_db) {
        console.error('Db has not been initialized, please call initDb first.');
        return;
    }
    return _db;
}

module.exports = { initDb, getDb };