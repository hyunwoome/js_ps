const solution = (arr) => {
  let answer = 'NO';
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  const DFS = (L, sum) => {
    if (L === n) {
      if (total - sum === sum) answer = 'YES';
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);
  return answer;
};

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
