var countConsistentStrings = function (allowed, words) {
  let arrAllowed = allowed.split('');
  let answer = 0;
  for (let i = 0; i < words.length; i++) {
    let stack = [];
    for (let j = 0; j < words[i].length; j++) {
      if (arrAllowed.includes(words[i][j])) stack.push(1);
    }
    if (stack.length === words[i].length) answer++;
  }
  return answer;
};

const allowed = 'ab';
const words = ['ad', 'bd', 'aaab', 'baa', 'badab'];
console.log(countConsistentStrings(allowed, words));
