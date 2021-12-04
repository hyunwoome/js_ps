const solution = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => a - b);
};
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));

// two pointer
const solution2 = (arr3, arr4) => {
  const result = [];
  const n = arr3.length;
  const m = arr4.length;
  let p1 = 0;
  let p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr3[p1] <= arr4[p2]) result.push(arr3[p1++]);
    else result.push(arr4[p2++]);
  }

  while (p1 < n) result.push(arr3[p1++]);
  while (p2 < m) result.push(arr4[p2++]);

  return result;
};

const arr3 = [1, 3, 5];
const arr4 = [2, 3, 6, 7, 9];
console.log(solution2(arr3, arr4));
