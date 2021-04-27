function solution(s) {
  let arr = s.split(' ');
  let answer = arr.map(
    (el) => el.charAt(0).toUpperCase() + el.substring(1).toLowerCase(),
  );
  return answer.join(' ');
}

console.log(solution('3people unFollowed me'));
