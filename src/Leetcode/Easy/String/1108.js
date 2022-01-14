/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let answer = '';
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      answer += '[.]';
    } else {
      answer += address[i];
    }
  }
  return answer;
};

const address = '1.1.1.1';
console.log(defangIPaddr(address));
