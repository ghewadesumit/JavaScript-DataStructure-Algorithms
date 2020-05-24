/**
 * https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/
 */
class Graph {
	constructor(v) {
		this.nodes = v;
		this.adjList = new Array(v);
		for (let i = 0; i < v; i++) {
			this.adjList[i] = [];
		}
	}

	addEdge(u, v) {
		this.adjList[u].push(v);
	}

	DFS(root) {
		const visited = new Array(this.nodes).fill(false);
		visited.forEach((bol, index) => {
			if (!bol) this.dfsHelper(index, visited);
		});
	}

	dfsHelper(root, visited) {
		const stack = [root];

		while (stack.length !== 0) {
			let current = stack.pop();

			if (!visited[current]) {
				console.log(current);
				visited[current] = true;
			}

			let i = 0;
			while (i < this.adjList[current].length) {
				if (!visited[this.adjList[current][i]]) {
					stack.push(this.adjList[current][i]);
				}
				i += 1;
			}
		}
	}
}

const init = new Graph(4);
init.addEdge(0, 1);
init.addEdge(0, 2);
init.addEdge(1, 2);
init.addEdge(2, 0);
init.addEdge(2, 3);
init.addEdge(3, 3);

console.log(init.adjList);

// init.BFS(2);
init.DFS(2);
