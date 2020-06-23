class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		if (this.root == null) this.root = new TreeNode(val);
		else {
			let queue = [this.root];

			while (queue.length !== 0) {
				let nums = queue.length;
				while (nums !== 0) {
					let current = queue.shift();

					if (val < current.val) {
						if (current.left) queue.push(current.left);
						else current.left = new TreeNode(val);
					} else {
						if (current.right) queue.push(current.right);
						else current.right = new TreeNode(val);
					}
					nums--;
				}
			}
		}
	}

	inorderTraversal() {
		this.inorderHelper(this.root);
	}

	inorderHelper(root) {
		let stack = [];

		while (stack.length !== 0 || root !== null) {
			while (root) {
				console.log(root.val);
				stack.push(root);
				root = root.left;
			}

			root = stack.pop();
			root = root.right;
		}
	}

	/**
	 * Binary Search Tree: Search Operation
	 */

	search(val) {
		console.log(this.searchHelper(val));
	}

	searchHelper(val) {
		if (this.root == null) return false;
		else {
			let queue = [this.root];

			while (queue.length !== 0) {
				let nums = queue.length;
				while (nums !== 0) {
					let current = queue.shift();
					if (current.val == val) return true;
					if (val < current.val) {
						if (current.left) queue.push(current.left);
						else return false;
					} else {
						if (current.right) queue.push(current.right);
						else return false;
					}
					nums--;
				}
			}
		}
	}
}

let tree = new BST();
tree.insert(4);
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(3);

tree.inorderTraversal();

tree.search(4);
tree.search(5);
tree.search(6);
