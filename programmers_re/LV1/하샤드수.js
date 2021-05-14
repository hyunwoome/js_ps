function solution(x) {
  let arr = String(x).split('');
  let sum = arr.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  return x % sum === 0 ? true : false;
}

const arr = 13;
console.log(solution(arr));
