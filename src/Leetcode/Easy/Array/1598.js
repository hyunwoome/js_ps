/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function(logs) {
  const stack = [];
  let count = 0;
  for (const i of logs) {
    if (i === '../') stack.pop();
    else if (i === './') continue;
    else stack.push(i);
  }
  return stack.length;
};

const logs = ["d1/","../","../","../"]
console.log(minOperations(logs));