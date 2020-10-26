// types of graphs
    // undirected graphs
    // directed graphs - edge has direction - can be both/single direction
    // weighted graphs - edge with value
    // unweighted graphs

// undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if( this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        };

        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        // return every vertex, except the one we want to remove
        
        // remove vertex2 from vertex1 edges
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}

var g = new Graph();
g.addVertex("Accra");
g.addVertex("Kumasi");
g.addVertex("Aspen");