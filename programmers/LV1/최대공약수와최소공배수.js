function gcd(n, m) {
  let a;
  let b;
  if (n > m) {
    a = n;
    b = m;
  } else {
    a = m;
    b = n;
  }
  while (b > 0) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}

function solution(n, m) {
  var answer = [];
  answer.push(gcd(n, m));
  answer.push((n * m) / gcd(n, m));
  return answer;
}

console.log(solution(2, 5));
