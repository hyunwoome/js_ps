function solution(s) {
  const lowerCase = s.split('').map((el) => el.toLowerCase());
  let p = [];
  let y = [];
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === 'p') p.push(lowerCase[i]);
    else if (lowerCase[i] === 'y') y.push(lowerCase[i]);
  }
  return p.length === y.length ? true : false;
}

const s = 'pPoooyY';
console.log(solution(s));
