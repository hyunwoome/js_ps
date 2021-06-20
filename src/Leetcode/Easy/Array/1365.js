/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var smallerNumbersThanCurrent = function (nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     let rank = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) rank++;
//     }
//     obj[nums[i]] = rank;
//     rank = 0;
//   }

//   let answer = [];
//   nums.forEach((num) => {
//     for (const [key, value] of Object.entries(obj)) {
//       if (Number(key) === num) answer.push(value);
//     }
//   });
//   return answer;
// };

const smallerNumbersThanCurrent = (nums) => {
  const sortedNums = Array.from(nums).sort((a, b) => a - b); // [4, 5, 6, 8]

  const sortedHash = sortedNums.reduce((acc, num, i) => {
    if (num in acc) return acc;
    acc[num] = i;
    return acc;
  }, {});

  return nums.map((num) => sortedHash[num]);
};

const nums = [6, 5, 4, 8];
console.log(smallerNumbersThanCurrent(nums));
