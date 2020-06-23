class Trie {
	constructor() {
		this.keys = new Map();
		this.isEndNode = false;
	}

	insert(current, word, index) {
		if (index == word.length) {
			current.isEndNode = true;
			return;
		}

		let node = current.keys.get(word[index]);
		if (!node) {
			node = new Trie();
			current.keys.set(word[index], node);
		}
		this.insert(node, word, index + 1);
	}

	search(current, word, index) {
		if (index == word.length) {
			return current.isEndNode;
		}
		let node = current.keys.get(word[index]);
		if (!node) return false;
		return this.search(node, word, index + 1);
	}

	searchPrefix(current, word, index) {
		if (index == word.length) return true;
		let node = current.keys.get(word[index]);
		if (!node) return false;
		return this.searchPrefix(node, word, index + 1);
	}

	delete(word) {
		return this.deleteHelper(this, word, 0);
	}

	deleteHelper(current, word, index) {
		if (index == word.length) {
			// If it is not end of word then we don't have to delete it return false
			if (!current.isEndNode) {
				return false;
			}

			// If its is end of the word then assign it false
			current.isEndNode = false;
			// then return if that entry can be deleted by checking the size of the key
			return current.keys.size == 0;
		}

		let node = current.keys.get(word[index]);
		if (!node) return false;

		let emptyStatus = this.deleteHelper(node, word, index + 1);

		// if empty status is true then we can delete reference from the current word
		if (emptyStatus) {
			current.keys.delete(word[index]);

			// then again check if the currents map is empty
			return current.keys.size == 0;
		}
		// if empty status is false then we simply return false
		return false;
	}
}

/**
 * Your Trie object will be instantiated and called as such:*/
let word = 'Believe';
let obj = new Trie();
obj.insert(obj, word, 0);

console.log(obj);
console.log(obj.search(obj, 'Believe', 0));
console.log(obj.searchPrefix(obj, 'Bel', 0));
console.log(obj.delete('Believe'));
console.log(obj.searchPrefix(obj, 'Bel', 0));

/**
 * Time Complexity of Trie insertion, search and deletion is
 * Object( L * N )
 * where L is the average length of the words
 * and N is the number of words
 *  */
