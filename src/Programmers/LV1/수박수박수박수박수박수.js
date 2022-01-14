function solution(n) {
  let answer = '';
  let one = '수';
  let two = '수박';
  if (n % 2 === 0) {
    let div = n / 2;
    answer += two.repeat(div);
  } else {
    let div = parseInt(n / 2);
    answer += two.repeat(div) + one;
  }
  return answer;
}

const n = 3;
console.log(solution(n));
