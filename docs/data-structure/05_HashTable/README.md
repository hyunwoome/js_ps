# 05. 해시 테이블

**해시 테이블**(hash table)은 **키와 값이 매핑**되어 있는 데이터 구조이며 검색, 삽입, 삭제와 같은 동작을 효율적인 방법으로 작동한다.
또한 해시 테이블은 두 가지로 구성되어 있다.

- **객체**: 데이터가 저장되는 테이블이 있는 객체, 모든 키-값을 보유한다.
- **해시함수**: 키-값 쌍의 인덱스를 결정하는 함수. 단방향 함수여야하여 각 키에 대해 다른 해시를 생성해야 한다.

### 성능

- 해시 테이블은 보통 상수 시간 O(1)에 수행하며, 최악의 경우 O(n)이 소요된다.

### 해시 함수

- 해시 함수는 **아이템의 키를 입력으로 사용하고, 해당 키에 특정 인덱스를 할당하여 키를 조회할 때 마다 인덱스를 반환**하는 메서드이다.

- 보통 자주 사용되는 해시 함수의 종류는 `Arithmetic Modular`, `Truncation`, `Folding`이 있다.

### 해시 테이블 충돌

- 때로는 해시 함수가 둘 이상의 키에 대해 동일한 인덱스를 생성할 수 있으며 이를 **해시 충돌**이라 한다.
- 해시 충돌을 해결하기 위한 방법으로는 다음과 같다.

  - `Linear probing`: 이미 채워진 인덱스를 오프셋 값을 추가하여 건너뛰는 방식
  - `Chaining`: 각 슬롯에 연결리스트 또는 트리와 같은 다른 데이터 구조에 대한 포인터를 보유함으로서 충돌을 피하는 방식, 대신 메모리가 많이 듦
  - `Resizing the Array or List`: 배열의 크기를 조정하여 임계값을 설정해서 충돌을 피하는 방식, 대신 함수 자체에 비용이 많이 듦
  - `Double hashing`: 해시 함수를 두 개 사용하는 것.

### 기능

- `calculateHash(key)`: 해시 함수
- `add(key, value)`: 키 / 값 쌍을 추가하는 함수
- `search(key)`: 키로 해당 값을 찾는 함수

## 참고

- [educative](https://www.educative.io/blog/data-strucutres-hash-table-javascript#implement)