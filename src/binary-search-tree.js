const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor(){
		this.arr = [];
	}
  root() {
    return this.arr.length == 0 ? null : {data: this.arr[0]};
  }

  add(data) {
    return this.arr.push(data);
  }

  has(x) {
    return this.arr.includes(x);
  }

  find(x) {
    return this.arr.includes(x) ? {data: x} : null;
  }

  remove(x) {
    this.arr = this.arr.map(item => {return item == x ? null : item}).filter(x => x !== null);
  }

  min() {
    return this.arr.sort((a,b) => a -b)[0];
  }

  max() {
    return this.arr.sort((a,b) => b - a)[0];
  }
}

module.exports = {
  BinarySearchTree
};