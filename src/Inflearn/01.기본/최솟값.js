const solution = (nums) => {
  const minValue = (numbers) => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) min = numbers[i];
    }
    return min;
  };

  return minValue(nums);
};

const nums = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(nums));
