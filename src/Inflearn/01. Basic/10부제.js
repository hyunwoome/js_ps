function solution(day, arr) {
  let answer = 0;
  let carNumber = [];
  for (let i = 0; i < arr.length; i++) {
    carNumber.push(arr[i] % 10);
  }
  for (let i = 0; i < carNumber.length; i++) {
    if (carNumber[i] === day) answer++;
  }
  return answer;
}

function solution1(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));

console.log(solution1(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution1(0, [12, 20, 54, 30, 87, 91, 30]));
