const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	constructor(){
	this.arr = [];
	}
  push(element ) {
		return this.arr.push(element);
  }

  pop() {
		let delElem = this.arr[this.arr.length - 1];
		this.arr = this.arr.map((item, index) => {return index == this.arr.length - 1 ? null : item}).filter(x => x !== null);
		return delElem;
  }

  peek() {
		return this.arr[this.arr.length - 1];
  }
}

module.exports = {
  Stack
};
