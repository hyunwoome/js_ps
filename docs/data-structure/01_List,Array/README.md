# 01. 리스트, 배열

## 리스트

리스트(list)는 선형적으로(순서가 존재함) 값들을 가지고 있는 자료구조이며, 흔히 **배열**(array)과 **연결 리스트**(linked list)로 나뉜다.

## 배열

배열은 **요소가 인접한 메모리 위치에 저장되는 간단한 데이터 구조**이며, 같은 값이 **한 번 이상 존재**할 수 있고, **순서**가 존재한다. 또한 **랜덤 엑세스**(random access)를 통한 빠른 인덱스 접근이 가능하다.
단, 배열의 요소에 삽입과 삭제를 할 땐 삽입, 삭제할 위치 뒤로 한 칸씩 밀고 당겨야 하기 때문에 **성능저하**가 일어난다.

### 배열의 기능

- `push()`: 배열의 끝에 요소를 추가
- `pop()`: 배열의 끝에서 요소를 삭제
- `insertAt()`: 특정 인덱스로 삽입
- `deleteAt()`: 특정 인덱스 삭제
- `getElementAtIndex()`: 특정 인덱스 접근

## 참고

- [geeksforgeeks](https://www.geeksforgeeks.org/implementation-of-array-class-in-javascript/)
- [trekhleb](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
