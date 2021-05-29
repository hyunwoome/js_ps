function solution(n, arr1, arr2) {
  const answer = [];
  const binaryArray1 = arr1.map((number) => number.toString(2).padStart(n, 0));
  const binaryArray2 = arr2.map((number) => number.toString(2).padStart(n, 0));
  console.log(binaryArray1);
  console.log(binaryArray2);
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (binaryArray1[i][j] === '1' || binaryArray2[i][j] === '1') {
        str += '#';
      } else {
        str += ' ';
      }
    }
    answer.push(str);
  }
  return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
console.log(solution(n, arr1, arr2));
