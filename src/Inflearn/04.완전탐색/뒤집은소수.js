const solution = (arr) => {
  const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2 || num === 3) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const reverseNums = Number(String(arr[i]).split('').reverse().join(''));
    if (isPrime(reverseNums)) result.push(reverseNums);
  }
  return result.join(' ');
};

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
