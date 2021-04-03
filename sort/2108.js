// boj 2108 (83) ('/dev/stdin')

const fs = require('fs');
const input = fs
	.readFileSync('sort/input', 'utf8')
	.trim()
	.split('\n')
	.map((el) => Number(el));

// [ 5, -1, -2, -3, -1, -2 ]
// 1. 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 2. 중앙값: N개의 수들을 증가하는 순서대로 나열했을 경우 그 중앙에 위치하는 값
// 3. 최빈값: N개의 수들 중 가장 많이 나타나는 값
// 4. 범위: N개의 수들 중 최댓값과 최솟값의 차이

const N = input.shift();
const map = {};

// 1. 산술평균
let sum = 0;
for (let i = 0; i < input.length; i++) {
	sum += input[i];
}

// 2. 중앙값
let increaseArr = input.sort((a, b) => a - b);
let center = increaseArr[Math.floor(increaseArr.length / 2)];

// 3. 최빈값
for (let value of input) {
	if (map[value]) {
		map[value] += 1;
	} else {
		map[value] = 1;
	}
}

let hitMaxNum = Math.max.apply(null, Object.values(map)); // 객체 값 중 가장 큰 값 (2)
let hitMaxNumArr = [];
let hitMaxNumResult = 0;

// 키값 추출해서
for (let key in map) {
	if (map[key] === hitMaxNum) {
		// 추출한 키의 값과 map의 가장 큰 수가 같다면,
		hitMaxNumArr.push(key); // 수가 같은 키를 푸쉬
	}
}

if (hitMaxNumArr.length > 1) {
	hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
	hitMaxNumResult = hitMaxNumArr[1];
} else {
	hitMaxNumResult = hitMaxNumArr[0];
}

// 4. 범위값
const minMaxValue = increaseArr[increaseArr.length - 1] - increaseArr[0];

console.log(Math.round(sum / N)); // -2
console.log(center); // -2
console.log(hitMaxNumResult); // -1
console.log(minMaxValue); // 2

/**
 * -2
 * -2
 * -1
 * 2
 */
