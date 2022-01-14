const solution = (str1, str2) => {
  const sort1 = str1.split('').sort().join('');
  const sort2 = str2.split('').sort().join('');
  return sort1 === sort2 ? 'YES' : 'NO';
};

const str1 = 'abaCC';
const str2 = 'Caaab';
console.log(solution(str1, str2));
