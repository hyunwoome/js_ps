function solution(nums) {
  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) answer++;
  }
  return answer;
}

const nums = [1, 2, 7, 6, 4];
console.log(solution(nums));
