/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let arr = Array(num_people).fill(0);
  let candy = 1;
  let i = 0;
  while (candy < candies) {
    if (i === num_people) {
      i = 0;
    }
    arr[i] += candy;
    candies -= candy;
    candy++;
    i++;
  }
  if (candies > 0) {
    if (i === num_people) i = 0;
    arr[i] += candies;
  }
  return arr;
};

const candies = 10;
const num_people = 3;
console.log(distributeCandies(candies, num_people));
