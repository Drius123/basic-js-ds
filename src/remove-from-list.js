const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
	let arr = [];
	class ListNode {
		constructor(x) {
			this.value = x;
			this.next = null;
		}
	}
	function convertArrayToList(arr) {
		return arr.reverse().reduce((acc, cur) => {
			if (acc) {
				const node = new ListNode(cur);
				node.next = acc;
				return node;
			}
			return new ListNode(cur);
		}, null);
	}
	function convertListToArray(list){
		arr.push(list.value);
		if(list.next !== null){
			convertListToArray(list.next);
		}
		return arr;
	}
	let arrList = convertListToArray(l);
	return convertArrayToList(arrList.map(item => {return item == k ? null : item}).filter(x => x !== null));
}

module.exports = {
  removeKFromList
};
