const solution = (arr) => {
  const positive = [];
  const negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive.push(arr[i]);
    else negative.push(arr[i]);
  }
  return [...negative, ...positive].join(' ');
};

const arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
