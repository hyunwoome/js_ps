/* 
  요소와 우선순위를 저장하기 위한 엘리먼트 클래스
*/
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

/*
  우선순위 큐 클래스
*/
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  /*
    enqueue(element, priority): 큐에 요소를 추가
  */
  enqueue(element, priority) {
    // 큐에 들어갈 요소 생성
    const qElement = new QElement(element, priority);
    let contain = false;

    // 큐를 순회하면서 각 요소의 우선순위를 비교 후 삽입
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    // 추가된 요소의 우선순위가 가장 낮다면 맨 뒤로 Push
    if (!contain) this.items.push(qElement);
  }

  /*
    enqueue(element, priority): 큐의 맨 앞 요소 제거
  */
  dequeue() {
    if (this.isEmpty()) return '큐에 요소가 존재하지 않습니다. (Underflow)';
    return this.items.shift();
  }

  /*
    front(): 큐의 맨 앞 요소 반환
  */
  front() {
    if (this.isEmpty()) return '큐에 요소가 존재하지 않습니다. (Underflow)';
    return this.items[0];
  }

  /*
    rear(): 큐의 맨 뒤 요소 반환
  */
  rear() {
    if (this.isEmpty()) return '큐에 요소가 존재하지 않습니다. (Underflow)';
    return this.items[this.items.length - 1];
  }

  /*
    isEmpty(): 큐가 비어있는지 확인
  */
  isEmpty() {
    return this.items.length == 0;
  }

  /*
    printPQueue(): 큐에 있는 모든 요소들을 반환
  */
  printPQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i].element + ' ';
    return str;
  }
}

const testPriorityQueue = new PriorityQueue();

console.log(testPriorityQueue.isEmpty()); // true

console.log(testPriorityQueue.front()); // 큐에 요소가 존재하지 않습니다. (Underflow)

testPriorityQueue.enqueue('A', 2);
testPriorityQueue.enqueue('B', 1);
testPriorityQueue.enqueue('C', 3);
testPriorityQueue.enqueue('D', 5);
testPriorityQueue.enqueue('E', 4);

console.log(testPriorityQueue.printPQueue()); // B A C E D

console.log(testPriorityQueue.front()); // QElement { element: 'B', priority: 1 }
console.log(testPriorityQueue.rear()); // QElement { element: 'D', priority: 5 }

console.log(testPriorityQueue.dequeue()); // QElement { element: 'B', priority: 1 }

console.log(testPriorityQueue.printPQueue()); // A C E D
