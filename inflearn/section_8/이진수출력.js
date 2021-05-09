function solution(num) {
  let answer = '';
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer += L % 2;
    }
  }
  DFS(num);
  return answer;
}

const input = 11;
console.log(solution(input));
