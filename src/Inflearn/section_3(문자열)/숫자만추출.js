function solution(str) {
  str = str.replace(/[a-zA-Z]/g, '');
  return parseInt(str);
}

function solution1(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

console.log(solution('g0en2T0s8eSoft'));
console.log(solution1('g0en2T0s8eSoft'));
