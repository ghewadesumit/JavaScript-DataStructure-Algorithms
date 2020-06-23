class Trie {
	constructor() {
		this.keys = new Map();
		this.isEndNode = false;
	}

	insert(word) {
		let current = this;
		for (let i = 0; i < word.length; i++) {
			let node = current.keys.get(word[i]);
			if (!node) {
				node = new Trie();
				current.keys.set(word[i], node);
			}
			current = node;
		}
		current.isEndNode = true;
	}

	search(word) {
		let current = this;
		for (let i = 0; i < word.length; i++) {
			let node = current.keys.get(word[i]);
			if (!node) return false;
			current = node;
		}

		return current.isEndNode;
	}

	searchPrefix(pre) {
		let current = this;

		for (let i = 0; i < pre.length; i++) {
			let node = current.keys.get(pre[i]);
			if (!node) return false;
			current = node;
		}
		return true;
	}
}

/**
 * Your Trie object will be instantiated and called as such:*/
let word = 'Believe';
let obj = new Trie();
obj.insert(word);

console.log(obj);
console.log(obj.search('Believe'));
console.log(obj.searchPrefix('Belg'));
//   var param_3 = obj.startsWith(prefix)

/**
 * Time Complexity of Trie insertion is
 * Object( L * N )
 * where L is the average length of the words
 * and N is the number of words
 *  */
