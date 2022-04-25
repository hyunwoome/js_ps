/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
  // k > 0 해당 인덱스 빼도 모두 더함
  // k < 0 해당 인덱스와 해당 인덱스 -1의 인덱스를 제외한 나머지 모두 더함
  // k === 0 모든 인덱스는 0

  const codeLen = code.length;
  const result = new Array(codeLen).fill(0)

  if (k > 0) {
      for (let i = 0; i < codeLen; i++) {
        let count = 0;
        let j = i + 1;
        while (count < k) {
          if (j === codeLen) { j = 0; }
          result[i] += code[j];
          count += 1;
          j++;
        }
      }
  }

  if (k < 0) {
    for (let i = 0; i < codeLen; i++) {
      let count = 0;
      let j = i - 1;
      while (count > k) {
        if (j === -1) { j = codeLen - 1 }
        result[i] += code[j];
        count -= 1;
        j--;
      }
    }
  }

  return result;
};

const code = [5, 2, 2, 3, 1]
const k = 3
console.log(decrypt(code, k));