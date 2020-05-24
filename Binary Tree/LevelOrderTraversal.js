/**
 * 
 * @param {Given a binary tree, return the level order traversal of its nodes' values. 
 * (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]} root 
 */

var levelOrder = function (root) {
	if (root == null) return [];

	let result = [];

	let queue = [root];

	while (queue.length !== 0) {
		let nums = queue.length;
		let res = [];
		while (nums !== 0) {
			let curr = queue.shift();
			res.push(curr.val);
			if (curr.left) queue.push(curr.left);
			if (curr.right) queue.push(curr.right);
			nums--;
		}
		result.push(res);
	}

	return result;
};
// O(N) Time Complexity and Space O(N) as we are storing every node on queue

// Recursive

var levelOrder = function (root) {
	if (root == null) return [];
	let result = [];
	const helper = (root, level) => {
		if (result.length == level) result.push([]);

		result[level].push(root.val);

		if (root.left) helper(root.left, level + 1);

		if (root.right) helper(root.right, level + 1);
	};
	helper(root, 0);
	return result;
};
