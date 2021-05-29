function solution(arr) {
  return arr.reduce((cur, acc) => cur + acc) / arr.length;
}

const arr = [1, 2, 3, 4];
console.log(solution(arr));
