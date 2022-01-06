/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const gold = 'Gold Medal';
  const silver = 'Silver Medal';
  const bronze = 'Bronze Medal';

  // sorting
  const sortScore = [...score].sort((a, b) => b - a);
  let obj = {};
  for (let i = 0; i < sortScore.length; i++) {
    obj[sortScore[i]] = i + 1;
    if (i === 0) obj[sortScore[0]] = gold;
    if (i === 1) obj[sortScore[1]] = silver;
    if (i === 2) obj[sortScore[2]] = bronze;
  }
  for (let i = 0; i < score.length; i++) {
    score[i] = `${obj[score[i]]}`;
  }

  return score;
};

// var findRelativeRanks = function (nums) {
//   const n = nums.length;
//   const rank = ['Gold', 'Silver', 'Bronze'];
//   const desc = [...nums].sort((a, b) => b - a);
//   const map = new Map();

//   for (let i = 0; i < n; i++) {
//     if (i <= 2) map.set(desc[i], `${rank[i]} Medal`);
//     else map.set(desc[i], i + 1);
//   }
//   console.log(map);

//   for (let i = 0; i < n; i++) {
//     nums[i] = `${map.get(nums[i])}`;
//   }

//   return nums;
// };

const score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));
