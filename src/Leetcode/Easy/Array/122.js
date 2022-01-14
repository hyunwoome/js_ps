/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
    if (priceYesterday < priceToday) profit += priceToday - priceYesterday;
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
