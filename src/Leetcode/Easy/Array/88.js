const merge = (nums1, m, nums2, n) => {
  for (let i = nums2.length - 1; i >= 0; i--) {
    nums1.unshift(nums2[i]);
    nums1.pop();
  }
  nums1.sort((a, b) => a - b);
}


const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
console.log(merge(nums1, m, nums2, n));