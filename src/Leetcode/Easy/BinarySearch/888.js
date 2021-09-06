/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((acc, cur) => acc + cur);
  const bobSum = bobSizes.reduce((acc, cur) => acc + cur);
  const diff = aliceSum - bobSum;
  const answer = [];
  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if (aliceSizes[i] - bobSizes[j] === diff / 2) {
        answer.push(aliceSizes[i], bobSizes[j]);
        return answer;
      }
    }
  }
};

const aliceSizes = [2];
const bobSizes = [1, 3];
console.log(fairCandySwap(aliceSizes, bobSizes));
