function solution(priorities, location) {
  let answer = 0;
  let arr = priorities.map((priority, idx) => [priority, idx]);
  while (arr.length !== 0) {
    let first = arr.shift();
    if (arr.every((el) => first[0] >= el[0])) {
      answer++;
      if (first[1] === location) break;
    } else arr.push(first);
  }
  return answer;
}

const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
