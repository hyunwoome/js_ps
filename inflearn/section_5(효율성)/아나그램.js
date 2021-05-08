function solution(s1, s2) {
  let lowerS1 = s1.toLowerCase().split('').sort().join('');
  let lowerS2 = s2.toLowerCase().split('').sort().join('');
  if (lowerS1 === lowerS2) return 'YES';
  else return 'NO';
}
// 해쉬 맵
function solution1(s1, s2) {
  let answer = 'YES';
  let sh = new Map();
  for (let x of s1) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  for (let x of s2) {
    if (!sh.has(x) || sh.get(x) === 0) return 'NO';
    sh.set(x, sh.get(x) - 1);
  }
  return answer;
}

// const s1 = 'AbaAeCe';
// const s2 = 'baeeACA';
// console.log(solution(s1, s2));

// const s3 = 'abaCC';
// const s4 = 'Caaab';
// console.log(solution(s3, s4));

const s1 = 'AbaAeCe';
const s2 = 'baeeACA';
console.log(solution1(s1, s2));

const s3 = 'abaCC';
const s4 = 'Caaab';
console.log(solution1(s3, s4));
