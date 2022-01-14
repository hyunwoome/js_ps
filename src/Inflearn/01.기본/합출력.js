const solution = (n) => {
  const untilSum = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) sum += i;
    return sum;
  };
  return untilSum(n);
};

const n = 10;
console.log(solution(n));
