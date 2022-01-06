const solution = (number) => {
  let answer = 0;
  const DFS = (num) => {
    if (num > 7) return;
    else {
      console.log(num);
      DFS(num * 2);
      DFS(num * 2 + 1);
    }
  };

  DFS(number);
  return answer;
};

const number = 1;
solution(number);