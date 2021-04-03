/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let sqrtArr = nums.map((el) => el ** 2);
	return sqrtArr.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
