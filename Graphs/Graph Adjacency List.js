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

	/**
	 * Time Complexity: O(N) as we are visiting all the nodes
	 * Space Complexity: O(V) where V is the visited nodes array
	 */
	BFS(root) {
		const visited = new Array(this.nodes).fill(false);
		const queue = [root];
		visited[root] = true;

		while (queue.length !== 0) {
			// dequeue the list(take the top element out from queue)
			let current = queue.shift();
			console.log(current);
			// Add all the elements into the queue which are not visited
			for (let i of this.adjList[current]) {
				if (!visited[i]) {
					visited[i] = true;
					queue.push(i);
				}
			}
		}
	}

	DFS(root) {
		const visited = new Array(this.nodes).fill(false);
		this.dfsHelper(root, visited);

		/**
		 *  While executing the below code comment the line 42
		 * For Traversing through all nodes in an disconnected graph
		 * visited.forEach((bol,index)=>{
		 * 		this.dfsHelper(root,visited)
		 * })
		 */
	}

	dfsHelper(root, visited) {
		visited[root] = true;
		console.log(root);

		for (let i of this.adjList[root]) {
			if (visited[i] == false) {
				this.dfsHelper(i, visited);
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
console.log('Iterative');
init.DFSIterative(2);
