const solution = (str1, str2) => {
  const len = str2.length;
  let i = 0;
  let j = len;
  let result = 0;
  while (j <= str1.length) {
    let str = '';
    for (let k = i; k < j; k++) {
      str += str1[k];
    }
    let sortStr = str.split('').sort().join('');
    console.log(sortStr);
    if (sortStr === str2) result++;
    i++;
    j++;
  }
  return result;
};

const str1 = 'bacaAacba';
const str2 = 'abc';
console.log(solution(str1, str2));
