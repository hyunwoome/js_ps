/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let newMap = new Map();
  let answer = '';
  s.split('')
    .sort()
    .forEach((n) => newMap.set(n, newMap.get(n) + 1 || 1));
  let list = [...newMap.entries()];

  while (answer.length !== s.length) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][1]) {
        answer += list[i][0];
        list[i][1]--;
      }
    }
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i][1]) {
        answer += list[i][0];
        list[i][1]--;
      }
    }
  }
  return answer;
};

const s = 'aaaabbbbcccc';
console.log(sortString(s));

// 1. 가장 작은 문자를 넣음
// 2. 마지막 넣은 문자보다 크고 가장 작은 문자를 넣음
// 3. 더이상 없을 때 까지 반복
// 4. 가장 큰 문자를 넣음
// 5. 마지막 넣은 문자보다 작고 가장 큰 문자를 넣음
// 6. 더이상 없을 때 까지 반복
// 7. s의 모든 문자를 픽할 때 까지 1 ~ 6까지 반복
