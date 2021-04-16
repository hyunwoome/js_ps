function solution(s) {
  var answer = '';
  let arr = s.split('');
  if (arr.length % 2 === 0) {
    answer += arr[arr.length / 2 - 1];
    answer += arr[arr.length / 2];
  } else {
    answer += arr[Math.floor(arr.length / 2)];
  }
  return answer;
}

console.log(solution('abcde'));

function solution2(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

console.log(solution2('abcde'));

// substr = start / length
// substring = start / last
// slice = start / last

// 둘의 차이 : start > end
// substring = 두 값을 바꾸어 처리
// 음수는 0으로 처리

// slice = "" 반환
// 음수는 절대값처럼 작용

// Math.ceil = 올림
// Math.floor = 버림
// Math.round = 반올림 (0 ~ 4 내림) (5 ~ 9 올림)
