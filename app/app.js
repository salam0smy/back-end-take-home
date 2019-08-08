const { loadFile, buildGraph } = require('./dataLoader');
const { dijkstras } = require('./dijkstras');

async function start() {
    const airportsCsv = 'data/full/airports.csv';
    const airlinesCsv = 'data/test/airlines.csv';
    const routesCsv = 'data/full/routes.csv';

    const routes = await loadFile(routesCsv);
    const airports = await loadFile(airportsCsv);

    const graph = buildGraph(airports, routes);

    const result = dijkstras('YYZ', 'CAN', graph);
    console.log(result);
}


start();