const solution = (num) => {
  let answer;
  let ch = Array.from({length: num + 1}, () => 0);
  const DFS = (v) => {
    if (v === num + 1) {
      let tmp = '';
      for (let i = 1; i <= num; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      console.log(tmp);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(1);
};

const num = 3;
solution(num);
