/**
 * https://www.geeksforgeeks.org/topological-sorting/
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

	dfs(root, visited, stack) {
		visited[root] = true;

		for (let i of this.adjList[root]) {
			if (visited[i] == false) {
				this.dfs(i, visited, stack);
			}
		}

		stack.push(root);
	}

	TopologicalSort() {
		let visited = new Array(this.nodes).fill(false);
		let stack = [];
		for (let i = 0; i < this.nodes; i++) {
			if (visited[i] == false) {
				this.dfs(i, visited, stack);
			}
		}
		console.log('stack is', stack);
		for (let i of stack) {
			console.log(i);
		}
	}
}

const init = new Graph(6);
init.addEdge(5, 2);
init.addEdge(5, 0);
init.addEdge(4, 0);
init.addEdge(4, 1);
init.addEdge(3, 1);
init.addEdge(2, 3);

init.TopologicalSort();
