/*
  Node
  1. 요소(element): 데이터를 저장할 공간
  2. 포인터(next): 다음 노드를 가리키는 포인터
*/
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/*
  LinkedList
  1. 헤드(head): 리스트의 첫 번째 노드를 가리키는 포인터
  2. 크기(size): 리스트의 크기를 나타내는 속성
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /* add(element)
     1. 리스트가 비어있으면 헤드를 삽입하려는 요소를 가리킨다.
     2. 리스트가 비어있지 않다면 리스트 끝에 요소를 추가한다.
  */
  add(element) {
    // 추가하기 위해 새 노드 생성
    let node = new Node(element);

    // 현재 노드를 저장하기 위한 변수
    let current;

    // 만약 리스트가 비어있다면 추가하고
    // head를 추가하는 노드를 가리키게 함
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // 리스트가 비어있지 않은 경우, 리스트 끝까지 반복하고
      // 리스트의 끝에 요소를 추가한다.
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  /* insertAt(element, index)
     - 해당 인덱스에 요소를 삽입하는 메서드
     1. 인덱스가 0이면 리스트의 맨 앞에 추가하고 헤드로 만듦
     2. 인덱스가 리스트의 마지막 위치라면 리스트 끝에 요소를 추가
     3. 인덱스가 0부터 (size - 1)사이라면, 인덱스를 순회하며 해당 인덱스에 요소를 추가
  */
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log('유효한 인덱스가 아닙니다.');
    } else {
      // 새 노드 생성
      let node = new Node(element);
      let current;
      let previous;

      current = this.head;

      // 첫 번째 인덱스에 요소를 추가
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let it = 0;

        // 삽입하려는 위치를 찾을 때 까지 리스트를 순회
        while (it < index) {
          it++;
          previous = current;
          current = current.next;
        }

        // 요소 추가
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }

  /* removeFrom(index)
     - 해당 인덱스를 제거하는 메서드
     1. 인덱스가 0이면 헤드를 제거하고 리스트의 다음 노드를 헤드로 만든다.
     2. 인덱스가 (size - 1)이면, 마지막 요소를 제거하고 previous를 마지막 요소로 만든다.
     3. 인덱스가 0부터 (size - 1)사이라면, previous와 현재 노드를 사용하여 요소를 제거한다.
  */
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log('유효한 인덱스가 아닙니다.');
    } else {
      let current = this.head;
      let previous = current;
      let it = 0;

      // 인덱스가 0일 때
      if (index === 0) {
        this.head = current.next;
      } else {
        // 리스트를 순회하며 요소를 제거할 위치를 찾고 노드들의 포인터를 변경
        while (it < index) {
          it++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
      return current.element;
    }
  }

  /* removeElement(element)
     - 해당 요소를 제거하는 메서드
     1. removeFrom(index)를 약간 수정하여 인덱스대신 요소로 검색
  */
  removeElement(element) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      // 현재 요소와 비교하며 요소가 발견되면 true를 반환
      if (current.element === element) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }
    return -1;
  }

  /* indexOf(element)
     - 요소의 인덱스를 반환하는 메서드
     1. 요소를 인자로 넣어주면 해당 인덱스를 반환하며 없으면 -1을 반환한다.
  */
  indexOf(element) {
    let count = 0;
    let current = this.head;
    // current가 null일 때 까지 순회하며 동일한 요소를 찾고 해당 count를 반환
    while (current !== null) {
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  /* isEmpty()
     - 리스트가 비어있는지 확인하는 메서드
  */
  isEmpty() {
    return this.size === 0;
  }

  /* size_of_list()
     - 리스트의 크기를 반환하는 메서드
  */
  size_of_list() {
    console.log(this.size);
  }

  /* printList()
     - 리스트의 내용들을 출력하는 메서드
  */
  printList() {
    let current = this.head;
    let str = '';
    while (current) {
      str += current.element + ' ';
      current = current.next;
    }
    console.log(str);
  }
}

const testLinkedList = new LinkedList();

console.log(testLinkedList.isEmpty()); // true

testLinkedList.add(10);

testLinkedList.printList(); // 10

testLinkedList.size_of_list(); // 1

testLinkedList.add(20);
testLinkedList.add(30);
testLinkedList.add(40);
testLinkedList.add(50);

testLinkedList.printList(); // 10 20 30 40 50

testLinkedList.removeElement(50);

testLinkedList.printList(); // 10 20 30 40

testLinkedList.insertAt(60, 2);

testLinkedList.printList(); // 10 20 60 30 40

testLinkedList.removeFrom(3);

testLinkedList.printList(); // 10 20 60 40
