function solution(n) {
  const strArr = String(n).split('');
  const sorting = strArr
    .map((el) => parseInt(el))
    .sort((a, b) => b - a)
    .join('');
  return Number(sorting);
}
