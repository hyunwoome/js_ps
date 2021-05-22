/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = (prices) => {
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        prices[i] -= prices[j];
        break;
      }
    }
  }
  return prices;
};

const prices = [8, 4, 6, 2, 3];
console.log(finalPrices(prices));
