// boj 6588 (113) ('/dev/stdin')
const input = require('fs')
  .readFileSync('math/input')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v * 1);

const primes = [];
const calcPrime = () => {
  for (let i = 2; i < 1000000; i++) {
    if (!primes[i]) {
      primes[i] = false;

      for (let j = i * 2; j < 1000000; j += i) {
        primes[j] = true;
      }
    }
  }
};

const getAnswer = (num) => {
  for (let i = 3; i < primes.length; i++) {
    if (!primes[i] && !primes[num - i]) {
      return `${num} = ${i} + ${num - i}\n`;
    }
  }
};

const solve = (input) => {
  calcPrime();
  let answer = '';

  for (const num of input) {
    if (num === 0) {
      break;
    } else {
      answer += getAnswer(num);
    }
  }

  console.log(answer);
};

solve(input);
