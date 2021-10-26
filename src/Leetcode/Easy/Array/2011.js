/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = (operations) => {
  let result = 0;
  for (const operation of operations) {
    if (operation === '--X' || operation === 'X--') result--;
    else result++;
  }
  return result;
};

const operations = ['++X', '++X', 'X++'];
console.log(finalValueAfterOperations(operations));
