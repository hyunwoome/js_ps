function solution(a, b, c, d, e, f, g) {
  return Math.min(...Array(a, b, c, d, e, f, g));
}

function solution1(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));
console.log(solution1([5, 3, 7, 11, 2, 15, 17]));