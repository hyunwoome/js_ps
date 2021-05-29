function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    const sqrtSum = Math.sqrt(n) + 1;
    return Math.pow(sqrtSum, 2);
  } else {
    return -1;
  }
}

const n = 121;
console.log(solution(n));
