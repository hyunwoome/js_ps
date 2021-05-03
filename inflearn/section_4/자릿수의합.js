function solution(nums) {
  let answer = 0;
  let len = nums.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let sum = String(nums[i])
      .split('')
      .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    if (sum > max) {
      max = sum;
      answer = nums[i];
    } else if (sum === max) {
      answer = Math.max(answer, nums[i]);
    }
  }
  return answer;
}

function solution1(nums) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of nums) {
    let sum = 0;
    let tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = parseInt(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
console.log(solution1([128, 460, 603, 40, 521, 137, 123]));
