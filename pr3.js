function solution(n, wires) {
  let answer = [];
  for (let i = 0; i < wires.length - 1; i++) {
    let last = wires[i][1];
    let tmp = 0;
    for (let j = 1; j < wires.length; j++) {
      if (last === wires[j][0]) tmp++;
    }
    answer.push(tmp);
  }
  let set = new Set(answer);
  if (set.size === 1) return 0;
  else return Math.max(...answer);
}

const n = 9;
const wires = [
  [1, 2],
  [2, 3],
  [3, 4],
];
console.log(solution(n, wires));
