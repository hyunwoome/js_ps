function solution(nums) {
  let count = 0;
  let tmp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        tmp.push(sum);
      }
    }
  }
  for (let l = 0; l < tmp.length; l++) {
    if (primeNumber(tmp[l])) count++;
  }
  return count;
}

function primeNumber(nums) {
  for (let i = 2; i * i <= nums; i++) {
    if (nums % i === 0) return false;
  }
  return true;
}

// console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
