function solution(s) {
  const strArr = s.split(' ');
  const arr = [];
  for (let i = 0; i < strArr.length; i++) {
    let str = '';
    for (let j = 0; j < strArr[i].length; j++) {
      if (j % 2 === 0) {
        str += strArr[i][j].toUpperCase();
      } else {
        str += strArr[i][j].toLowerCase();
      }
    }
    arr.push(str);
    str = '';
  }
  return arr.join(' ');
}

const s = 'try hello world';
console.log(solution(s));
