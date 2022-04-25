function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// TODO: 다시보기
const mergeNodes = function (head) {
  let newHead = head;

  const result = new ListNode();
  let tmp = result;

  while (newHead) {
    if (newHead.val === 0 && newHead.next) {
      tmp.next = new ListNode(0);
      tmp = tmp.next;
    }

    tmp.val += newHead.val;
    newHead = newHead.next;
  }

  return result.next;
};

const node8 = new ListNode(0);
const node7 = new ListNode(2, node8);
const node6 = new ListNode(5, node7);
const node5 = new ListNode(4, node6);
const node4 = new ListNode(0, node5);
const node3 = new ListNode(1, node4);
const node2 = new ListNode(3, node3);
const head = new ListNode(0, node2);

console.log(mergeNodes(head));