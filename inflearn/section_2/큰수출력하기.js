function solution(nums) {
  let answer = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) answer.push(nums[j]);
      break;
    }
  }
  return answer;
}

function solution1(nums) {
  let answer = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) answer.push(nums[i + 1]);
  }
  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
console.log(solution1([7, 3, 9, 5, 6, 12]));
