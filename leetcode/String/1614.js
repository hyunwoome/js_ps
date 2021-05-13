let maxDepth = (s) => {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') arr.push(sum++);
    else if (s[i] === ')') arr.push(sum--);
    else arr.push(0);
  }
  return Math.max(...arr);
};

const s = '1';
console.log(maxDepth(s));
