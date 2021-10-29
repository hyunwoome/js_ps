const twoOutOfThree = (nums1, nums2, nums3) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const combineArr = [...set1, ...set2, ...set3];
  const obj = {};
  for (let i = 0; i < combineArr.length; i++) {
    obj[combineArr[i]] = obj[combineArr[i]] ? obj[combineArr[i]] + 1 : 1
  }
  const result = [];
  for (const i in obj) {
    if (obj[i] > 1) result.push(+i);
  }
  return result;
};

const nums1 = [1, 1, 3, 2];
const nums2 = [2, 3];
const nums3 = [3];
console.log(twoOutOfThree(nums1, nums2, nums3));