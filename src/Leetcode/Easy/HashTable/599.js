/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let obj = {};
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      let restaurant = list1[i];
      let sum = i + list2.indexOf(list1[i]);
      obj[restaurant] = sum;
    }
  }

  let arr = Object.values(obj);
  const minValue = Math.min(...arr);

  const answer = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === minValue) answer.push(key);
  }
  return answer;
};

const list1 = ['KFC'];
const list2 = ['KFC'];
console.log(findRestaurant(list1, list2));
