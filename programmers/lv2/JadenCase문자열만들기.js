function solution(s) {
  let tmpArr = [];
  let splitted = s.split(' ').map((el) => el.toLowerCase());
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i][0] >= 'a' && splitted[i][0] <= 'z') {
      tmpArr.push(splitted[i][0].toUpperCase() + splitted[i].substr(1));
    } else {
      tmpArr.push(splitted[i]);
    }
  }
  return tmpArr.join(' ');
}

console.log(solution('3people unFollowed me'));
