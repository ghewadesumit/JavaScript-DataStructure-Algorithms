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
		this.root = this.insertHelper(this.root, val);
	}

	insertHelper(root, val) {
		if (root == null) return new TreeNode(val);
		if (val < root.val) root.left = this.insertHelper(root.left, val);
		else if (val == root.val) return root;
		else root.right = this.insertHelper(root.right, val);
		return root;
	}

	inorderTraversal() {
		this.inorderHelper(this.root);
	}

	inorderHelper(root) {
		if (root == null) return;
		console.log(root.val);
		this.inorderHelper(root.left);
		this.inorderHelper(root.right);
	}

	search(val) {
		console.log(this.searchHelper(this.root, val));
	}

	searchHelper(root, val) {
		if (root == null) return false;
		if (root.val == val) return true;
		if (val < root) return this.searchHelper(root.left, val);
		else return this.searchHelper(root.right, val);
	}
}

let tree = new BST();
tree.insert(4);
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(3);

tree.inorderTraversal();
