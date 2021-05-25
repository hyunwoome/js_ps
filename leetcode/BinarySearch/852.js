/**
 * @param {number[]} arr
 * @return {number}
 */
// 배열의 길이가 3이상
// 0 < i < arr.length - 1
const peakIndexInMountainArray = (arr, low = 0, high = arr.length - 1) => {
  if (!arr.length) return -1;

  const mid = ((low + high) / 2) | 0;

  if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

  if (arr[mid] < arr[mid - 1]) return peakIndexInMountainArray(arr, low, mid);

  if (arr[mid] < arr[mid + 1]) return peakIndexInMountainArray(arr, mid, high);
};

const arr = [3, 4, 5, 1];
console.log(peakIndexInMountainArray(arr));
