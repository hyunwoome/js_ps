const solution = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) result.push(arr1[i]);
  }

  return result.sort((a, b) => a - b).join(' ');
};

const arr1 = [1, 3, 5, 9, 2];
const arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));
