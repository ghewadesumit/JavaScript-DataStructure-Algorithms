class Queue {
	constructor() {
		this.arr = [];
	}

	enqueue(item) {
		this.arr.push(item);
	}

	dequeue() {
		this.arr.shift();
	}

	isEmpty() {
		return this.arr.length == 0;
	}

	getTop() {
		return this.arr.length > 0 ? this.arr[0] : 'Queue is Empty';
	}
}

const queue = new Queue();
console.log(queue.getTop());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.arr);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.arr);
console.log(queue.isEmpty());
