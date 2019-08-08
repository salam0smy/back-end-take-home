const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

const dijkstras = (start, finish, graph) => {
    const startChildren = graph.getEdgesForVertex(start);

    const costs = {
        [finish]: Infinity
    };
    const parents = { [finish]: null };

    startChildren.forEach(v => {
        costs[v] = 1;
        parents[v] = start;
    });
    const processed = [];


    let node = lowestCostNode(costs, processed);
    while (node) {
        if(node === finish) break; // we found the finish line
        let cost = costs[node];
        
        let children = graph.getEdgesForVertex(node); // array
        children.forEach(n => {
            let newCost = cost + 1;
            if (!costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        });
        
        processed.push(node);
        node = lowestCostNode(costs, processed);
        // if we found finish.. break the loop
        // than retrace back from finish node
    }

    let optimalPath = [finish];
    let parent = parents[finish];
    while (parent) {
        optimalPath.push(parent);
        if(parent === start) break;
        parent = parents[parent];
      }
      optimalPath.reverse();

      const results = {
        distance: costs[finish],
        path: optimalPath
      };
      return results;
}

module.exports = { dijkstras };