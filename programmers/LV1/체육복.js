function solution(n, lost, reserve) {
  let count = 0;
  let ans = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (i + 1 === lost[j]) ans[i] = 0;
    }
    for (let j = 0; j < reserve.length; j++) {
      if (i + 1 === reserve[j]) ans[i] += 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (ans[i] === 0 && ans[i - 1] === 2) {
      ans[i - 1] = 1;
      ans[i] = 1;
    } else if (ans[i] === 0 && ans[i + 1] === 2) {
      ans[i + 1] = 1;
      ans[i] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (ans[i] > 0) count++;
  }
  return count;
}

console.log(solution(5, [2, 4], [3]));

// n : 전체학생
// lost : 도난당한 학생
// reserve : 여벌의 체육복을 가지고 있는 학생
