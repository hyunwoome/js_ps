function solution(strings, n) {
  var answer = [];
  for (let i = 0; i < strings.length; i++) {
    let index = strings[i][n];
    strings[i] = index + strings[i];
  }
  strings.sort();
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].replace(strings[i][0], '');
    answer.push(strings[i]);
  }
  return answer;
}

const strings = ['sun', 'bed', 'car'];
const n = 1;
console.log(solution(strings, n));
