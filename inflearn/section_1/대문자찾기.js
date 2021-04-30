function solution(string) {
  let answer = 0;
  for (let x of string) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

function solution1(string) {
  let answer = 0;
  for (let x of string) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

console.log(solution('KoreaTimeGood'));
console.log(solution1('KoreaTimeGood'));
