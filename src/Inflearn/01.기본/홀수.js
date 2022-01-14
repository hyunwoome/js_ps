const solution = (nums) => {
  const filteredOddNumber = nums.filter((num) => num % 2);
  console.log(filteredOddNumber.reduce((acc, cur) => acc + cur));
  console.log(Math.min(...filteredOddNumber));
};

const nums = [12, 77, 38, 41, 53, 92, 85];
solution(nums);
