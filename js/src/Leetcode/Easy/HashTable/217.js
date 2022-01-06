const containsDuplicate = (nums) => {
  const obj = {};
  for (const i of nums) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  for (const i in obj) {
    if (obj[i] > 1) return true;
  }
  return false;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
