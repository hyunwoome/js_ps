// boj 1181 (86) ('/dev/stdin')

const fs = require('fs');
const input = fs.readFileSync('sort/input', 'utf8').trim().split('\n');
const N = Number(input.shift());

// 문자열 길이로 오름차순으로 소팅 하고 같다면, localeCompare를 이용해서 알파벳 정렬순서로 정렬
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const uniqueValue = new Set(sorted); // Set을 이용해서 중복값 제거
console.log(Array.from(uniqueValue).join('\n')); // 다음줄로 출력
