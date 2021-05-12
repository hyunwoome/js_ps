function solution(num) {
  let answer = 0;
  let arr = Array(num + 2).fill(0);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= num + 1; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  answer = arr[num + 1];
  return answer;
}

const num = 7;
console.log(solution(num));
