function solution(people, limit) {
  people.sort((a, b) => a - b);
  let current = people.length - 1;
  let another = 0;
  let answer = 0;

  while (current >= another) {
    if (people[current] + people[another] <= limit) {
      another++;
    }
    current--;
    answer++;
  }
  return answer;
}

const people = [70, 80, 50];
const limit = 100;
console.log(solution(people, limit));
