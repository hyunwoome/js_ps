/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let answer = [];
  let obj = {};

  for (let i = 0; i < groupSizes.length; i++) {
    let group = groupSizes[i];
    if (obj[group]) {
      obj[group].push(i);
    } else {
      obj[group] = [i];
    }
    console.log(obj);
    if (obj[group].length === group) {
      answer.push(obj[group]);
      delete obj[group];
    }
  }
  return answer;
};

const groupSizes = [3, 3, 3, 3, 3, 1, 3];
console.log(groupThePeople(groupSizes));
