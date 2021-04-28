function solution(arr) {
  let min = Math.min(...arr);
  let del = arr.splice(arr.indexOf(min), 1);
  return arr.length ? arr : [-1];
}

console.log(solution([4, 3, 2, 1]));
