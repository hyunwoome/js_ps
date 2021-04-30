function solution(arr) {
  let oddArr = [];
  arr.map((nums) => {
    if (nums % 2 !== 0) oddArr.push(nums);
  });
  let oddSum = oddArr.reduce((acc, cur) => acc + cur);
  let oddMin = Math.min.apply(null, oddArr);
  let answerArr = Array(oddSum, oddMin).join(' ');
  return answerArr;
}

function solution1(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let i of arr) {
    if (i % 2 !== 0) {
      sum += i;
      if (i < min) min = i;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer.join(' ');
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
console.log(solution1([12, 77, 38, 41, 53, 92, 85]));
