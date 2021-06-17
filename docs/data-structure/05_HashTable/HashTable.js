class HashTable {
  constructor() {
    this.value = {};
    this.length = 0;
    this.size = 0;
  }

  // calculateHash(key): 간단한 해시 함수
  // 키의 길이를 해시 테이블의 크기로 나눈 나머지로 인덱스를 설정
  calculateHash(key) {
    return key.toString().length % this.size;
  }

  // add(key, value): 키/값 쌍을 삽입하는 함수
  // hasOwnProperty()는 객체가 특정 프로퍼티를 가지고 있는지 불리언 반환
  add(key, value) {
    // 키의 해시를 계산
    const hash = this.calculateHash(key);
    // 해시가 아직 존재하지 않으면 객체 저장소에 저장
    if (!this.value.hasOwnProperty(hash)) {
      this.value[hash] = {};
    }
    // 저장된 키가 없으면 키와 값을 저장하고 해시 테이블의 크기를 늘림
    if (!this.value[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.value[hash][key] = value;
  }
  // search(key): 키를 입력받으면 해당 값을 반환하는 함수
  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.value.hasOwnProperty(hash) &&
      this.value[hash].hasOwnProperty(key)
    ) {
      return this.value[hash][key];
    } else {
      return '해당 키는 존재하지 않습니다';
    }
  }
}

const testHashTable = new HashTable();

testHashTable.add('Canada', '300');
testHashTable.add('Germany', '100');
testHashTable.add('Italy', '50');

console.log(testHashTable.search('Canada')); // 300
