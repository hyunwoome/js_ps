function solution(n, t, m, p) {
  let str = '';

  for (let i = 0; i < t * m; i++) {
    str += i.toString(n);
  }

  let arr = str.toUpperCase().split('');

  let divideArr = [];
  let tmp = [];
  for (let i = 0; i <= arr.length; i++) {
    if (tmp.length < m) {
      tmp.push(arr[i]);
    } else {
      divideArr.push(tmp);
      tmp = [];
      tmp.push(arr[i]);
    }
  }
  let answer = '';
  console.log(divideArr);
  for (let i = 0; i < divideArr.length; i++) {
    if (answer.length < t) {
      answer += divideArr[i][p - 1];
    } else {
      break;
    }
  }
  return answer;
}
