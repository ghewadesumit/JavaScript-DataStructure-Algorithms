/**
 * O(1) push pop getTop getMin
 * O(n) space complexity as we are storing all the min
 */
class Stack {
	constructor() {
		this.stack = [];
	}

	push(x) {
		if (this.stack.length == 0) {
			this.stack.push([x, x]);
		} else {
			let min = this.stack[this.stack.length - 1][1];
			min = Math.min(min, x);
			this.stack.push([x, min]);
		}

		return this.stack;
	}

	pop() {
		if (this.stack.length > 0) {
			this.stack.pop();
		}
		return this.stack;
	}

	top() {
		if (this.stack.length > 0) {
			return this.stack[this.stack.length - 1][0];
		}
	}

	getMin() {
		if (this.stack.length > 0) {
			return this.stack[this.stack.length - 1][1];
		}
	}
}
