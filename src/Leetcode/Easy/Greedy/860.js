/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fives = 0;
  let tens = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fives++;
    } else if (bills[i] === 10) {
      tens++;
      fives--;
    } else if (bills[i] === 20) {
      if (tens > 0) {
        tens--;
        fives--;
      } else {
        fives -= 3;
      }
    }
    if (fives < 0 || tens < 0) return false;
  }
  return true;
};

const bills = [5, 5, 5, 10, 20];
console.log(lemonadeChange(bills));

// 1 레모네이드 : 5달러
// 무조건 한 개씩 (5달러)
