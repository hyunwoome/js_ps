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

const array = new Array();

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
console.log(array);
// Array { length: 5, data: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } }

array.pop();
console.log(array);
// Array { length: 4, data: { '0': 1, '1': 2, '2': 3, '3': 4 } }

array.insertAt(0, 0);
console.log(array);
// Array { length: 5, data: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4 } }

array.deleteAt(0);
console.log(array);
// Array { length: 4, data: { '0': 1, '1': 2, '2': 3, '3': 4 } }

console.log(array.getElementAtIndex(3)); // 4
