// boj 11651 (85) ('/dev/stdin')

const fs = require('fs');
const input = fs.readFileSync('sort/input', 'utf8').trim().split('\n');
const N = Number(input.shift());

// 정렬기준 y먼저, 다음 x

const newInput = input.map((coords) =>
	coords.split(' ').map((nums) => Number(nums)),
);

let result = '';
newInput
	.sort((a, b) => {
		if (a[1] !== b[1]) {
			return a[1] - b[1];
		}
		return a[0] - b[0];
	})
	.forEach((coords) => {
		result += `${coords[0]} ${coords[1]}\n`;
	});

console.log(result);
