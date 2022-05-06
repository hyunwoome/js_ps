function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const reverseList = function (head) {
  let node = head;
  let prev = null;
  let next = null;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(reverseList(node1));