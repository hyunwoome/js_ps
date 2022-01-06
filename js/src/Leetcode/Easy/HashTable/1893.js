/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  let set = new Set();
  for (let i = left; i <= right; i++) {
    set.add(i);
  }

  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    for (let j = start; j <= end; j++) {
      set.delete(j);
    }
  }
  return set.size === 0;
};

const ranges = [
  [1, 10],
  [10, 20],
];
const left = 21;
const right = 21;
console.log(isCovered(ranges, left, right));
