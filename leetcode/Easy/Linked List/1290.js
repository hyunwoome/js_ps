/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let binaryNum = 0;
  let node = head;
  while (node) {
    binaryNum += node.val;
    node = node.next;
  }
  return parseInt(binaryNum, 2);
};

const head = [1, 0, 1];
console.log(getDecimalValue(head));
