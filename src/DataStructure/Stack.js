/**
 * Stack
 *
 * - 구성요소
 * 1. 배열: 데이터를 담기 위한 배열
 *
 * - 메서드
 * 1. push()
 * 2. pop()
 * 3. peek()
 * 4. isEmpty()
 * 5. size()
 * 6. clear()
 *
 * - 특징
 * 1. 스택은 선입후출의 원칙을 따르는 선형 자료구조 (Last-In-First-Out)
 */

// program to implement stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  // 스택에 새로운 요소 추가
  push(element) {
    return this.items.push(element);
  }

  // 스택에서 요소 제거
  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // 마지막 요소 참조
  peek() {
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length == 0;
  }

  // 스택의 사이즈 확인
  size() {
    return this.items.length;
  }

  // 스택 비우기
  clear() {
    this.items = [];
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(8);
console.log(stack.items); // [1, 2, 4, 8]

stack.pop();
console.log(stack.items); // [1, 2, 4]

console.log(stack.peek()); // 4

console.log(stack.isEmpty()); // false

console.log(stack.size()); // 3

stack.clear();
console.log(stack.items); // []
