function solution(clothes) {
  let answer = 1;
  const hash = {};
  for (let i = 0; i < clothes.length; i++) {
    hash[clothes[i][1]] = (hash[clothes[i][1]] || 1) + 1;
  }
  for (const key in hash) {
    answer *= hash[key];
  }
  return answer - 1;
}

const clothes = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];
console.log(solution(clothes));
