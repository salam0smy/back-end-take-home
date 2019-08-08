const csv = require('csvtojson')
const Graph = require('./models/Graph')

async function loadFile(csvFilePath) {
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray;
}

function buildGraph(airports, routes){
    const graph = new Graph();
    airports.forEach((airport) => {
        const code = airport['IATA 3'];
        graph.addVertex(code);
    });
    routes.forEach((route) => {
        graph.addEdge(route['Origin'], route['Destination']);
    });

    return graph;
}

// function Dijkstra

module.exports = { loadFile, buildGraph };