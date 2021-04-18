function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((el, index) => (index + 1) * el);
}

console.log(solution(-4, 2));

// map(function(cur, index, array, thisArg))
