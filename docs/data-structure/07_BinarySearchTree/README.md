# 07. 이진 탐색 트리

트리는 일부 엣지(edge)로 연결된 노드의 모음이다. 트리는 비선형 데이터 구조이며, 이진 탐색 트리는 이진 트리의 한 종류로서 빈번하게 사용되는 아주 중요한 자료구조이다. 이진 탐색 트리는 **값이 작은 노드가 왼쪽에 저장되고 값이 높은 노드가 오른쪽에 저장되는 구조**를 갖는다.

## 기본 작동

- `insert(data)`: 데이터가 있는 트리에 새 노드를 삽입하고, 트리가 비어있으면 이 노드를 트리에 추가하고 루트로 만든다. 그렇지 않으면 `insertNode(node, data)`를 호출한다.
  - `insertNode(node, data)`: 주어진 데이터를 현재 노드의 데이터와 비교하고 그에 따라 왼쪽 또는 오른쪽으로 이동하며 새 노드를 추가한다.
- `remove(data)`: 루트 노드와 주어진 데이터를 전달하여 `removeNode(node, data)`를 호출하고, 함수가 반환 한 값으로 트리의 루트를 갱신하는 헬퍼함수.
  - `removeNode(node, data)`: 주어진 데이터가 있는 노드를 검색 후 특정 단계를 수행해 제거한다.
- `inorder(node)`: 중위 순회 (왼쪽 -> **루트** -> 오른쪽)
- `preorder(node)`: 전위 순회 (**루트** -> 왼쪽 -> 오른쪽)
- `postorder(node)`: 후위 순회 (왼쪽 -> 오른쪽 -> **루트**)
- `findMinNode(node)`: 최소값을 탐색한다.
- `getRootNode()`: 트리의 루트 노드를 반환한다.
- `search(data)`: 전체 트리안에서 특정 데이터를 탐색한다.

## 복잡도

### 시간 복잡도

|   접근    |   탐색    |   삽입    |   삭제    |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### 공간 복잡도

O(n)

## 참고

- [geeksforgeeks](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
- [trekhleb](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)
