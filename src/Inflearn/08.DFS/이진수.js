const solution = (n) => {
  let answer = '';

  const DFS = (num) => {
    if (num === 0) return;
    else {
      DFS(parseInt(num / 2));
      answer += num % 2;
    }
  };

  DFS(n);
  return answer;
};

const n = 11;
console.log(solution(n));
