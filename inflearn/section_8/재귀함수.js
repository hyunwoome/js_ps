function solution(num) {
  function DFS(L) {
    // 종료한다는 의미
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(num);
}

const input = 3;
console.log(solution(input));
