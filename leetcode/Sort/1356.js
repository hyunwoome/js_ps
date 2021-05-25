/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const countBits = (num) => {
    let answer = 0;
    let bits = num.toString(2);
    for (let i = 0; i < bits.length; i++) {
      if (bits[i] === '1') answer++;
    }
    return answer;
  };

  return arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(sortByBits(arr));
