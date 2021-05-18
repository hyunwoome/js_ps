/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const n = s.length;
  const count = new Array(26).fill(0);

  for (const char of s) {
    const index = char.charCodeAt(0) - 97;
    count[index]++;
  }
  let result = '';
  while (result.length < n) {
    for (let j = 0; j < 26 && result.length < n; j++) {
      if (count[j] > 0) {
        const char = String.fromCharCode(j + 97);
        result += char;
        count[j]--;
      }
    }
  }
};

const s = 'aaaabbbbcccc';
console.log(sortString(s));

/**
 * 1. 가장 작은 문자를 꺼내서 result에 담는다.
 * 2. result에 마지막으로 추가된 문자보다 크고 s에서 가장 작은 문자를 추가
 * 3. 더 이상 문자가 없을 떄 까지 위 반복
 * 4. 가장 큰 문자를 꺼내서 result에 담는다.
 * 5. result에 마지막으로 추가된 문자보다 작고 s에서 가장 큰 문자를 추가
 * 6. 더 이상 문자가 없을 떄 까지 위 반복
 */
