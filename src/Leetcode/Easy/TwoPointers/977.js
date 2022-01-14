const sortedSquares = (nums) => {
  const squareList = nums.map((num) => Math.pow(num, 2));
  return squareList.sort((a, b) => a - b);
};

const nums = [-4, 1, 0, 3, 10];
console.log(sortedSquares(nums));
