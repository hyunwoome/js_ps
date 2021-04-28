function solution(n) {
  let arr = Array(n + 1).fill(true);
  arr[0] = arr[1] = false;
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = i + i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  console.log(arr);
  return arr.filter((e) => e).length;
}

console.log(solution(12));
