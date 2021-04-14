// boj 10814 (87) ('/dev/stdin')
const fs = require('fs');
const input = fs.readFileSync('sort/input', 'utf8').trim().split('\n');

// 나이순 -> 가입순

const N = Number(input.shift());
const splited = input.map((el) => el.split(' '));
const indexArr = [];
for (let i = 0; i < input.length; i++) {
	indexArr.push([Number(splited[i][0]), splited[i][1], i]);
}

let result = '';
indexArr
	.sort((a, b) => a[0] - b[0] || a[2] - b[2])
	.forEach((list) => (result += `${list[0]} ${list[1]}\n`));

console.log(result);
