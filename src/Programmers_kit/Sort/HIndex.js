function solution(citations) {
  let sortArray = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= sortArray[i]) {
    i++;
  }
  return i;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
