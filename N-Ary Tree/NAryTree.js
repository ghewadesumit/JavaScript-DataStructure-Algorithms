class Node {
	constructor(val) {
		this.val = val;
		this.children = [];
	}

	preorder(root) {
		let current = root ? root : this.root;
		console.log('element is', current.val, ' ');
		if (current) {
			for (let i = 0; i < current.children.length; i++) {
				this.preorder(current.children[i]);
			}
		}
	}

	postorder(root) {
		let current = root ? root : this.root;

		if (current) {
			for (let i = 0; i < current.children.length; i++) {
				this.postorder(current.children[i]);
			}
		}
		console.log('element is', current.val, ' ');
	}

	BFS(root) {
		let queue = [root];
		while (queue.length !== 0) {
			let current = queue.shift();
			console.log('BFS', current.val);
			for (let i = 0; i < current.children.length; i++) {
				queue.push(current.children[i]);
			}
		}
	}
}

let root = new Node('jeff');
root.children.push(new Node('SVP1'));
root.children.push(new Node('SVP2'));
root.children.push(new Node('SVP3'));

root.children[0].children.push(new Node('VP1'));
root.children[0].children.push(new Node('VP2'));
root.children[0].children.push(new Node('VP3'));

root.children[1].children.push(new Node('MG1'));
root.children[1].children.push(new Node('MG2'));
root.children[1].children[0].parent = root.children[1];
root.children[1].children[1].parent = root.children[1];
// console.log(root.children[1]);

root.preorder(root);
// root.postorder(root);
// root.BFS(root);
