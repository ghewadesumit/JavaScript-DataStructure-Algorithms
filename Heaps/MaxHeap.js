class MaxHeap {
	constructor() {
		this.heap = [null];
	}

	insert(item) {
		this.heap.push(item);

		// Get the position of the newly added item
		let current = this.heap.length - 1;

		// Check if the newly added item is greater than its parents,
		// If yes swap the newly added item with its element until it is greater than the parent

		while (
			current > 1 &&
			this.heap[Math.floor(current / 2)] < this.heap[current]
		) {
			// swap using destructuring in ES6

			[this.heap[Math.floor(current / 2)], this.heap[current]] = [
				this.heap[current],
				this.heap[Math.floor(current / 2)],
			];

			current = Math.floor(current / 2);
		}
	}

	delete() {
		let current = 1;
		let leftIndex = 2 * current;
		let rightIndex = 2 * current + 1;

		//heapifying

		if (this.heap.length > 2) {
			// replace the top element with the rightmost element of the array( Tree);
			this.heap[current] = this.heap.pop();

			// Now Heapify the tree, make sure it satisfy the constraints of Complete tree and maxHeap
			// loop through until there's LeftChild, RightChild or
			// current element (After swapping) is smaller than left and right child
			while (
				this.heap[leftIndex] &&
				this.heap[rightIndex] &&
				(this.heap[current] < this.heap[leftIndex] ||
					this.heap[current] < this.heap[rightIndex])
			) {
				// Check if leftChild is smaller than right is yes then make it top element by swapping
				// or else make right child top element and update the current position
				if (this.heap[leftIndex] > this.heap[rightIndex]) {
					[this.heap[current], this.heap[leftIndex]] = [
						this.heap[leftIndex],
						this.heap[current],
					];
					current = leftIndex;
				} else {
					[this.heap[current], this.heap[rightIndex]] = [
						this.heap[rightIndex],
						this.heap[current],
					];
					current = rightIndex;
				}

				//update the currents left and right child to further check the contraints
				leftIndex = 2 * current;
				rightIndex = 2 * current + 1;
			}
		} else if (this.heap.length > 1) {
			// This will run when only one element except null is remaining in the array
			this.heap.pop();
		} else {
			// you know what is this for
			console.log('Jan lega kya ab');
		}
	}
}

const maxHeap = new MaxHeap();
const arr = [10, 23, 36, 32, 38, 45, 57];
arr.forEach((item) => maxHeap.insert(item));
console.log(maxHeap.heap);
// maxHeap.delete();
// console.log(maxHeap.heap);
// maxHeap.delete();
// console.log(maxHeap.heap);
// maxHeap.delete();
// console.log(maxHeap.heap);
// maxHeap.delete();
// console.log(maxHeap.heap);
// maxHeap.delete();
// console.log(maxHeap.heap);
// maxHeap.delete();
// console.log(maxHeap.heap);
// maxHeap.delete();
// console.log(maxHeap.heap);
// maxHeap.delete();
