/**
 * While deleting or killing a node in BST it can be 3 cases or conditions:
 *
 * 1) Most easy way to kill a node would be when it is alone,
 *    So a node to be deleted can be alone.
 *
 * 2) Second is bit difficult cause this time the node to be deleted has a bodygaurd with it,
 *    So a node can have a children left or right.
 *
 * 3) Third is the most difficult cause the node to be deleted has two bodygaurds,
 *    So a node can have two children left and right
 */

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

	delete(val) {
		this.root = this.deleteHelper(this.root, val);
	}

	deleteHelper(root, val) {
		if (root == null) return root;

		if (val < root.val) root.left = this.deleteHelper(root.left, val);
		else if (val > root.val) root.right = this.deleteHelper(root.right, val);
		else {
			/**
			 * Here this if...else if condition takes care of the First Two conditions
			 * 1) If node is leaf node.
			 *    - If the node is leaf then we can replace the node to be deleted with either of two children as they are already null
			 * 2) If Node has either left or right i.e only one child;
			 *    - In this case if left is null then we send right
			 *    - And else if right is null then we send left
			 */
			if (root.left == null) return root.right;
			else if (root.right == null) return root.left;

			/**
			 * Node with two children
			 * The node which is having two children, we can replace it with inorder predecessor or successor
			 *
			 * Inorder Predecessor means the element whose value is maximum in the left subtree.
			 * Inorder Successor means that element whose value is minimum in the right subtree.
			 *
			 * We can use either of two to replace the node to be deleted.
			 * Here we are using Inorder Successor
			 *
			 * After replacing the value of the node to be deleted with inorder successor.
			 * Then we have to delete the inorder successor, as it violates BST property.
			 */
			root.val = this.minValue(root.right);

			root.right = this.deleteHelper(root.right, root.val);
		}

		return root;
	}

	minValue(root) {
		let mini = root.val;
		while (root.left !== null) {
			mini = root.left.val;
			root = root.left;
		}
		return mini;
	}
}

let tree = new BST();
tree.insert(4);
tree.insert(7);
tree.insert(6);
tree.insert(8);
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(3);

tree.delete(4);
tree.inorderTraversal();
