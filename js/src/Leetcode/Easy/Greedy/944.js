var minDeletionSize = function (strs) {
  let arr1 = [];
  for (let i = 0; i < strs[0].length; i++) {
    let tmp = '';
    for (let j = 0; j < strs.length; j++) {
      tmp += strs[j][i];
    }
    arr1.push(tmp);
    tmp = '';
  }

  let copy = arr1.slice();
  let arr2 = copy.map((el) => el.split('').sort().join(''));
  let answer = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) answer++;
  }
  return answer;
};

const strs = ['cba', 'daf', 'ghi'];
console.log(minDeletionSize(strs));
