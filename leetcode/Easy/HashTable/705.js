var MyHashSet = function () {
  this.set = [];
};

MyHashSet.prototype.add = function (key) {
  let find = 0;
  for (let i = 0; i < this.set.length; i++) {
    if (this.set[i] === key) {
      find = 1;
      break;
    }
  }
  if (!find) this.set.push(key);
};

MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this.set.length; i++) {
    if (this.set[i] === key) {
      this.set.splice(i, 1);
      break;
    }
  }
};

MyHashSet.prototype.contains = function (key) {
  for (const num of this.set) {
    if (num === key) return true;
  }
  return false;
};
