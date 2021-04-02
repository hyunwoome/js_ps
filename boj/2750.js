// boj 2750 (80)

// ! for submit
// const fs = require('fs');
// const input = fs
// 	.readFileSync('/dev/stdin')
// 	.toString()
// 	.trim()
// 	.split('\n')
// 	.map((el) => Number(el));

// ! for local
const input = `5
5
2
3
4
1
`;

const input1 = input
	.toString()
	.trim()
	.split('\n')
	.map((el) => Number(el));

const N = input1.shift();
const arr = input1.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
	console.log(arr[i]);
}
