// 선택정렬
function selectionSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return answer;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(selectionSort(arr));
