function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = function (l1, l2) {
  const List = new ListNode(0);
  let head = List;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;

  }

  return head;
};

const list1_3 = new ListNode(3);
const list1_2 = new ListNode(4, list1_3);
const list1_1 = new ListNode(2, list1_2);

const list2_3 = new ListNode(4);
const list2_2 = new ListNode(6, list2_3);
const list2_1 = new ListNode(5, list2_2);

console.log(addTwoNumbers(list1_1, list2_1));