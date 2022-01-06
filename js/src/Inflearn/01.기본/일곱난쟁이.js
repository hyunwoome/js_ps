const solution = (heights) => {
  const sum = heights.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = 1; j < heights.length; j++) {
      if (sum - (heights[i] + heights[j]) === 100) {
        heights.splice(i, 1);
        heights.splice(j - 1, 1);
      }
    }
  }
  return heights;
};

const heights = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(heights));
