function solution(arr) {
  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;
    let divisor = 3;
    while (n > divisor) {
      if (n % divisor === 0) return false;
      divisor += 2;
    }
    return true;
  }

  let answer = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let reverse = parseInt(String(arr[i]).split('').reverse().join(''));
    if (isPrime(reverse)) answer.push(reverse);
  }
  return answer;
}

function solution1(arr) {
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let answer = [];
  for (let x of arr) {
    let result = 0;
    while (x) {
      let t = x % 10;
      result = result * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(result)) answer.push(result);
  }
  return answer;
}

let input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(input));
console.log(solution1(input));
