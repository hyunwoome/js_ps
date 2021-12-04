const solution = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => a - b);
};
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
