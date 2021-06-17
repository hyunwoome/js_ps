function solution(a, b, c) {
  let arr = Array(a, b, c);
  arr.sort((a, b) => b - a);
  if (arr[0] > arr[1] + arr[2]) return 'NO';
  else return 'YES';
}

function solution1(a, b, c) {
  let answer = 'YES';
  let max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) return 'NO';
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

console.log(solution1(6, 7, 11));
console.log(solution1(13, 33, 17));
