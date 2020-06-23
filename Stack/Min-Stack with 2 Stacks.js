/**
 * O(1) push pop getTop getMin
 * O(n) space complexity as we are storing all the min
 */
class Stack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(x) {
		let minStackSize = this.minStack.length;

		if (minStackSize == 0) this.minStack.push(x);
		else this.minStack.push(Math.min(this.minStack[minStackSize - 1], x));

		this.stack.push(x);
		return this.stack;
	}

	pop() {
		if (this.stack.length > 0) {
			if (
				this.minStack[this.minStack.length - 1] ==
				this.stack[this.stack.length - 1]
			) {
				this.minStack.pop();
			}
			this.stack.pop();
		}
		return this.stack;
	}

	top() {
		if (this.stack.length > 0) {
			return this.stack[this.stack.length - 1];
		}
	}

	getMin() {
		if (this.minStack.length > 0) {
			return this.minStack[this.minStack.length - 1];
		}
	}
}
