// boj 11650 (84) ('/dev/stdin')

const fs = require('fs');
const input = fs.readFileSync('sort/input', 'utf8').trim().split('\n');
let N = Number(input.shift());

// 정렬기준 x먼저, 다음 y

// 각각 숫자배열로 만들기
const newInput = input.map((coords) =>
	coords.split(' ').map((nums) => parseInt(nums)),
);

let result = '';
newInput
	.sort((a, b) => {
		if (a[0] !== b[0]) {
			return a[0] - b[0]; // 오름차순
		}
		return a[1] - b[1];
	})
	.forEach((coords) => {
		result += `${coords[0]} ${coords[1]}\n`;
	});

console.log(result);

// 시간초과

// let sortX = x.sort((a, b) => a - b);
// let sortY = y.sort((a, b) => a - b);

// for (let i = 0; i < sortX.length; i++) {
// 	console.log(sortX[i], sortY[i]);
// }
