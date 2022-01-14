var RecentCounter = function () {
  this.stream = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.stream.push(t);
  while (this.stream[0] < t - 3000) {
    this.stream.shift();
  }
  return this.stream.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// [[], [1], [100], [3001], [3002]]
let t = ['RecentCounter', 'ping', 'ping', 'ping', 'ping'];
let obj1 = new RecentCounter();
let param_1 = obj1.ping(t);
console.log(param_1);
