function solution(s) {
  let answer = [];
  let splitted = s.split(' ');
  for (let i = 0; i < splitted.length; i++) {
    let a = '';
    for (let j = 0; j < splitted[i].length; j++) {
      if (j % 2 === 0) {
        a += splitted[i][j].toUpperCase();
      } else {
        a += splitted[i][j].toLowerCase();
      }
    }
    answer.push(a);
  }
  return answer.join(' ');
}

console.log(solution('try hello world'));
