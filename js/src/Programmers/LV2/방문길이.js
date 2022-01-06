function solution(dirs) {
  let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let set = new Set();

  for (let dir of dirs) {
    let nowX = now[0] + move[dir][0];
    let nowY = now[1] + move[dir][1];

    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    set.add('' + now[0] + now[1] + nowX + nowY);
    set.add('' + nowX + nowY + now[0] + now[1]);

    now = [nowX, nowY];
  }
  return set.size / 2;
}

const dirs = 'ULURRDLLU';
console.log(solution(dirs));
