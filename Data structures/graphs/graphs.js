// types of graphs
    // undirected graphs
    // directed graphs - edge has direction - can be both/single direction
    // weighted graphs - edge with value
    // unweighted graphs

// undirected graph
class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        // return every vertex, except the one we want to remove
        
        // remove vertex2 from vertex1 edges
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        // perform the search
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            // loop over the vertex's children to perform search on them
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        // continue searching if the stack has items
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            // loop over the currentVertex's children -- if visited ignore, act on it
            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}



let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

// g.depthFirstRecursive("A");
// g.depthFirstIterative("A");
// g.breadthFirst("A");