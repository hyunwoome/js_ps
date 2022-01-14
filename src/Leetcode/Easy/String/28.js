/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  return haystack.indexOf(needle);
};

const haystack = 'aaaaa';
const needle = 'bba';
console.log(strStr(haystack, needle));
