// boj 10989 (82) ('/dev/stdin')
// 메모리 초과 (C++로 제출함)

const fs = require('fs');
const input = fs
	.readFileSync('sort/input', 'utf8')
	.trim()
	.split('\n')
	.map((el) => Number(el));

const N = input.shift();
console.log(input.sort((a, b) => a - b));
