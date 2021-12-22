const solution = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  arr.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(' '));
  }
};

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
solution(arr);
