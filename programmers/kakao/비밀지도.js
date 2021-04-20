function solution(n, arr1, arr2) {
  const answer = [];
  const binaryArray1 = arr1.map((number) => number.toString(2).padStart(n, 0));
  const binaryArray2 = arr2.map((number) => number.toString(2).padStart(n, 0));
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

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
