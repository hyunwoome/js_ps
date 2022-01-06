const solution = (m, ps, pt) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  const DFS = (L, sum, time) => {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  };
  DFS(0, 0, 0);
  return answer;
};

const m = 20;
const ps = [10, 25, 15, 6, 7];
const pt = [5, 12, 8, 3, 4];
console.log(solution(m, ps, pt));
