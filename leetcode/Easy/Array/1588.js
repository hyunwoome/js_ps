var sumOddLengthSubarrays = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((i - j) % 2 === 0) {
        for (let k = i; k <= j; k++) {
          count += arr[k];
        }
      }
    }
  }
  return count;
};

const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));
