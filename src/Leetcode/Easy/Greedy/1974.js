var minTimeToType = function (word) {
  const NUMS = word
    .split('')
    .map((c) => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
  let sum = 0;
  let prev = 1;
  for (let n of NUMS) {
    sum += Math.min(Math.abs(prev - n), 26 - Math.abs(prev - n));
    sum += 1;
    prev = n;
  }

  return sum;
};

const word = 'abc';
console.log(minTimeToType(word));
