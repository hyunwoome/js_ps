function solution(price, money, count) {
  const p = [];
  let tmp = 0;
  for (let i = 0; i < count; i++) {
    tmp += price;
    p.push(tmp);
  }
  const acc = p.reduce((acc, cur) => acc + cur);
  return acc > money ? acc - money : 0;
}

const price = 3;
const money = 20;
const count = 4;
console.log(solution(price, money, count));
