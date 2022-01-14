const construct2DArray = (original, m, n) => {
  if (original.length !== m * n) return [];
  let result = [];
  let arr = [];
  for (let i = 0; i < original.length; i++) {
    arr.push(original[i]);
    if (arr.length === n) {
      result.push(arr);
      arr = [];
    }
  }
  return result;
};

const original = [1, 2, 3, 4];
const m = 2;
const n = 2;
console.log(construct2DArray(original, m, n));