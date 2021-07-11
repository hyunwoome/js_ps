// boj 2750 (81) ('/dev/stdin')
// Quick Sort

// ! for submit
const fs = require('fs');
const input = fs
	.readFileSync('/dev/stdin', 'utf8')
	.trim()
	.split('\n')
	.map((el) => Number(el));

// ! for local
// const input = [5, 5, 4, 3, 2, 1];

const N = input.shift();
const result = quickSortStarter(input);

function quickSortStarter(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, l, r) {
	const pivot = arr[Math.floor((l + r) / 2)];
	let left = l;
	let right = r;

	while (left <= right) {
		while (arr[left] < pivot) left++;
		while (arr[right] > pivot) right--;

		if (left <= right) {
			const temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left++;
			right--;
		}
	}
	if (l < right) quickSort(arr, l, right);
	if (r > left) quickSort(arr, left, r);
	return arr;
}

console.log(result.join('\n'));

// sort()

// const input = [5, 5, 4, 3, 2, 1, -1, -3];
// const N = input.shift();

// let results = '';
// input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));

// console.log(results);
