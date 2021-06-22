/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let sum = head.val;
  while (head.next !== null) {
    head = head.next;
    sum += String(head.val);
  }
  return parseInt(sum, 2);
};

const head = [1, 0, 1];
console.log(getDecimalValue(head));
