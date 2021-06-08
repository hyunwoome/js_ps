/**
 * Linked List
 *
 * - 구성요소
 * 1. Head : 연결 리스트의 맨 앞 노드
 * 2. Node : 데이터와 참조 포인터를 담고 있는 요소
 * 3. Pointer : 다음 요소를 가리키는 참조 포인터
 * 4. Tail: 연결 리스트의 맨 뒤 노드
 *
 * - 메서드
 * 1. size()
 * 2. clear()
 * 3. getLast()
 * 4. getFirst()
 *
 * - 종류
 * 1. 단일 연결 리스트
 * 2. 이중 연결 리스트
 * 3. 원형 연결 리스트
 *
 * - 장점
 * 1. 전체 데이터 구조를 재구성할 필요없이, 노드들을 삭제 또는 추가가 쉬움
 *
 * - 단점
 * 1. 배열과 달리 데이터 요소의 랜덤 액세스가 허용되지 않아 검색 작업이 느림
 * 2. 포인터를 저장해야 하기 때문에, 일반적인 배열보다 메모리를 더 많이 사용
 */

// Node (데이터와 포인터로 구성)
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List (처음 head는 null로 초기화)
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // 크기
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // 노드들 비우기
  clear() {
    this.head = null;
  }

  // 마지막 노드
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  // 첫 번째 노드
  getFirst() {
    return this.head;
  }
}

// 노드 생성 후 next가 다음을 가리키게 함
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);
console.log(list.head.next.data); // 5

console.log(list.size()); // 2
console.log(list.getLast()); // 5
console.log(list.getFirst()); // 2
console.log(list.clear());
console.log(list); // null
