/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let sortingSalary = salary.sort((a, b) => a - b);
  sortingSalary.pop();
  sortingSalary.shift();
  let sum = 0;
  for (let i = 0; i < sortingSalary.length; i++) {
    sum += sortingSalary[i];
  }
  return sum / sortingSalary.length;
};

const salary = [4000, 3000, 1000, 2000];
console.log(average(salary));
