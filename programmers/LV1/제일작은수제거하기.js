function solution(arr) {
  if (arr.length !== 1) {
    let minIdx = arr.indexOf(Math.min(...arr));
    arr.splice(minIdx, 1);
    return arr;
  } else {
    return [-1];
  }
}

const arr = [4, 3, 2, 1];
console.log(solution(arr));
