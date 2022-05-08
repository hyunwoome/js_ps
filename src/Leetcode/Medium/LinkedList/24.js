function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const swapPairs = head => {

};

const list4 = new ListNode(4);
const list3 = new ListNode(3, list4);
const list2 = new ListNode(2, list3);
const list1 = new ListNode(1, list2);
console.log(swapPairs(list1));
