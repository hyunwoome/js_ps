/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const target = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (const char of text) {
    target[char]++;
  }
  return Math.floor(
    Math.min(target.b, target.a, target.l / 2, target.o / 2, target.n),
  );
};

const text = 'nlaebolko';
console.log(maxNumberOfBalloons(text));
