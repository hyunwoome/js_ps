class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue(): 큐에 요소를 삽입 (뒤)
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue(): 큐로부터 요소를 제거 (앞)
  dequeue() {
    if (this.isEmpty()) {
      return '제거할 원소가 없습니다. (Underflow)';
    } else {
      return this.items.shift();
    }
  }

  // front(): 큐의 맨 앞 요소를 반환
  front() {
    if (this.isEmpty()) {
      return '제거할 원소가 없습니다. (Underflow)';
    } else {
      return this.items[0];
    }
  }

  // isEmpty(): 큐가 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // printQueue(): 큐의 모든 요소를 반환
  printQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

const testQueue = new Queue();

console.log(testQueue.dequeue()); // 제거할 원소가 없습니다. (Underflow)

console.log(testQueue.isEmpty()); // true

testQueue.enqueue(10);
testQueue.enqueue(20);
testQueue.enqueue(30);
testQueue.enqueue(40);
testQueue.enqueue(50);

console.log(testQueue.front()); // 10

console.log(testQueue.dequeue()); // 10

console.log(testQueue.front()); // 20

console.log(testQueue.dequeue()); // 20

console.log(testQueue.printQueue()); // 30 40 50
