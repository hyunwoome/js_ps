const solution = (n, arr) => {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > n) sum -= arr[lt++];
    answer += rt - lt + 1;
  }
  return answer;
};

const n = 5;
const arr = [1, 3, 1, 2, 3];
console.log(solution(n, arr));
