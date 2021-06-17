class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.data;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  getElementAtIndex(index) {
    return this.data[index];
  }
}

const testArray = new Array();

testArray.push(1);
testArray.push(2);
testArray.push(3);
testArray.push(4);
testArray.push(5);
console.log(testArray);
// Array { length: 5, data: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } }

testArray.pop();
console.log(testArray);
// Array { length: 4, data: { '0': 1, '1': 2, '2': 3, '3': 4 } }

testArray.insertAt(0, 0);
console.log(testArray);
// Array { length: 5, data: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4 } }

testArray.deleteAt(0);
console.log(testArray);
// Array { length: 4, data: { '0': 1, '1': 2, '2': 3, '3': 4 } }

console.log(testArray.getElementAtIndex(3)); // 4
