var MyHashMap = function () {
  this.set = {};
};

MyHashMap.prototype.put = function (key, value) {
  this.set[key] = value;
};

MyHashMap.prototype.get = function (key) {
  return this.set[key] !== undefined ? this.set[key] : -1;
};

MyHashMap.prototype.remove = function (key) {
  delete this.set[key];
};
