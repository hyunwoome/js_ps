const solution = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }
    if (arr[i] > min) {
      let tmp = arr[i];
      arr[i] = arr[index];
      arr[index] = tmp;
      min = Number.MAX_SAFE_INTEGER;
    }
  }
  return arr;
};

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
