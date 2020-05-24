class MinHeap {
	constructor() {
		this.heap = [null];
	}

	insert(item) {
		this.heap.push(item);

		// Get the position of the newly added item
		let current = this.heap.length - 1;

		// Check if the newly added item is smaller than its parents,
		// If yes swap the newly added item with its element until it is smaller than the parent

		while (
			current > 1 &&
			this.heap[Math.floor(current / 2)] > this.heap[current]
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
		let popValue = null;

		//heapifying
		if (this.heap.length > 2) {
			popValue = this.heap[current];
			this.heap[current] = this.heap.pop();

			while (
				this.heap[leftIndex] &&
				this.heap[rightIndex] &&
				(this.heap[current] > this.heap[leftIndex] ||
					this.heap[current] > this.heap[rightIndex])
			) {
				if (this.heap[leftIndex] < this.heap[rightIndex]) {
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

				leftIndex = 2 * current;
				rightIndex = 2 * current + 1;
			}
		} else if (this.heap.length > 1) {
			popValue = this.heap.pop();
		} else {
			console.log('Jan lega kya ab');
		}
		return popValue;
	}

	heapSort() {
		let sortedArray = [];
		while (this.heap.length !== 1) {
			sortedArray.push(this.delete());
		}
		return sortedArray;
	}
}

const minHeap = new MinHeap();
const arr = [10, 23, 36, 32, 38, 45, 57];
arr.forEach((item) => minHeap.insert(item));
console.log(minHeap.heapSort());
// console.log(minHeap.heap);
