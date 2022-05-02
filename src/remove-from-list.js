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
  let current = l;
  let prev = null;
  while (l.next !== null) {
    if (l.value === k) {
      if (prev === null) {
        // console.log('current0', current)
        current = l.next;
        // console.log('current1', current)
      }
      else {
        // console.log('prev0', prev)
        prev.next = l.next;
        // console.log('prev1', prev)
      }
    }
    else {
      // console.log('l0', l)
      prev = l;
    }
    l = l.next;
    // console.log('l1', l)
    // console.log('cuRRRR=', current)
  } 
  console.log(l.value)
  while (l) {
    if (l.value === k) {
      if (prev !== null) {
        prev.next = l.next;
      }
    }
    prev = l;
    l = l.next;
  }

  return current;
}

module.exports = {
  removeKFromList
};
