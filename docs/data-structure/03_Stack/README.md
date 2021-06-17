# 03. 스택

## 스택이란?

- **스택**(stack)은 아주 유용한 데이터 구조이며 넓은 범위의 어플리케이션에서 사용한다.
- 스택은 **선형 데이터 구조이며 특정 순서를 따르며 요소의 삭제와 삽입**을 수행한다.
- 순서는 **LIFO**(Last in First Out)를 따른다.

### 기능

- `push()`: 스택에 요소를 추가
- `pop()`: 스택에서 요소를 제거하며, 만약 비어있는 스택에 호출한다면 가지고 있는 요소의 범위보다 작아지므로 **언더플로우**(underflow)를 발생시킨다.
- `peek()`: 스택의 가장 상단에 있는 요소를 반환한다. (삭제는 아님)
- `isEmpty()`: 스택이 비어있는지 확인한다.
- `printStack()`: 스택에 있는 요소들을 반환한다.

### 참고

- [geeksforgeeks](https://www.geeksforgeeks.org/implementation-stack-javascript/)
