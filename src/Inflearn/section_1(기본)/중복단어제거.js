function solution(arr) {
  let set = new Set(arr);
  return Array.from(set).join(' ');
}

function solution1(arr) {
  let answer = arr.filter((v, i) => {
    if (arr.indexOf(v) === i) return v;
  });
  return answer.join(' ');
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));
console.log(solution1(['good', 'time', 'good', 'time', 'student']));
