# 02. 연결 리스트

## 연결 리스트란?

- **연결 리스트**(linked list)는 배열과 같은 선형 데이터 구조이다.
- 그러나 배열과 다르게 요소들을 인접한 위치에 저장하지 않고 포인터를 사용해서 요소들을 연결한다.

### 장점

- 배열의 크기는 고정되어 있으므로 요소들의 수의 상한을 미리 알아야 한다.
- 배열에 새 요소를 삽입하는 것은 새 요소에 대해 저장공간을 만들어야 하고 기존 요소들을 이동시켜야 하므로 비용이 많이 든다.
- 즉, **정적인 크기를 갖는 배열에 비해 동적이며, 삽입과 삭제가 쉬움**

### 단점

- **랜덤 엑세스**(random access)가 허용되지 않는다. 첫 번째 노드부터 순차적으로 접근해야 한다. 따라서 배열보다 특정 요소에 접근하는 속도가 느리다.
- 각각의 노드들은 다음 요소를 가리키는 포인터에 대한 추가적인 공간이 필요하다.

### 표현

- 연결 리스트는 첫 번째 노드를 가리키는 포인터가 존재하며, 이를 헤드(head)라고 한다. 만약 연결 리스트가 비어있다면, 헤드는 `null`을 가리킨다.
- 각 노드는 두 부분으로 구성되어 있다.
  - 데이터
  - 다음 노드를 가리키는 포인터

### 기능

- `add(element)`: 리스트의 끝에 요소를 추가
- `insertAt(element, index)`: 특정 인덱스에 요소를 추가
- `removeFrom(index)`: 특정 인덱스로부터 요소를 제거하고 반환
- `removeElement(element)`: 특정 요소를 제거하고 반환
- `indexOf(element)`: 리스트에 특정 요소가 있다면 해당 인덱스를 반환
- `isEmpty()`: 리스트가 비어있는지 확인
- `size_of_list()`: 리스트의 크기를 반환
- `printList()`: 리스트에 포함되어 있는 내용들을 출력

### 참고

- [geeksforgeeks](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/)