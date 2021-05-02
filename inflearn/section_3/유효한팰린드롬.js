function solution(arr) {
  let answer = 'YES';
  arr = arr.toLowerCase().replace(/[^a-z]/g, '');
  if (arr.split('').reverse().join('') !== arr) return 'NO';
  return answer;
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
