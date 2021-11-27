const solution = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let len = arr.length + 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] >= arr[j]) len--;
    }
    result.push(len);
  }
  return result;
};

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
