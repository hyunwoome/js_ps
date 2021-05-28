/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let one = s.substring(0, s.length / 2);
  let two = s.substring(s.length / 2, s.length);
  let oneSum = 0;
  let twoSum = 0;
  for (let i = 0; i < one.length; i++) {
    if (
      one[i] === 'a' ||
      one[i] === 'e' ||
      one[i] === 'i' ||
      one[i] === 'o' ||
      one[i] === 'u' ||
      one[i] === 'A' ||
      one[i] === 'E' ||
      one[i] === 'I' ||
      one[i] === 'O' ||
      one[i] === 'U'
    ) {
      oneSum++;
    }
    if (
      two[i] === 'a' ||
      two[i] === 'e' ||
      two[i] === 'i' ||
      two[i] === 'o' ||
      two[i] === 'u' ||
      two[i] === 'A' ||
      two[i] === 'E' ||
      two[i] === 'I' ||
      two[i] === 'O' ||
      two[i] === 'U'
    )
      twoSum++;
  }
  return oneSum === twoSum ? true : false;
};

const s = 'textbook';
console.log(halvesAreAlike(s));
