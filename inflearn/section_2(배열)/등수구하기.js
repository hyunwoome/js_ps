function solution(arr) {
  let n = arr.length;
  // let answer = Array.from({ length: n }, () => 1);
  let answer = Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }

  return answer;
}

// console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([87, 89, 92, 92, 92]));
