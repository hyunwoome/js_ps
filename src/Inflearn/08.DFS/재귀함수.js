const solution = (n) => {
  const DFS = (L) => {
    if (L === 0) return;
    console.log(L);
    DFS(L - 1);
  };
  DFS(n);
};

const n = 3;
solution(n);
