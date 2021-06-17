class Stack {
  constructor() {
    this.items = [];
  }

  // 스택에 원소 삽입
  push(element) {
    this.items.push(element);
  }

  // 스택에 원소 제거
  pop() {
    if (this.items.length === 0) {
      return '제거할 원소가 없습니다. (Underflow)';
    }
    return this.items.pop();
  }

  // 최상단 원소 반환
  peek() {
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 원소들을 반환
  printStack() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

const testStack = new Stack();

console.log(testStack.isEmpty()); // true

console.log(testStack.pop()); // 제거할 원소가 없습니다. (Underflow)

testStack.push(10);
testStack.push(20);
testStack.push(30);

console.log(testStack.printStack()); // 10 20 30

console.log(testStack.peek()); // 30 (확인)

console.log(testStack.pop()); // 30 (제거)

console.log(testStack.printStack()); // 10 20
