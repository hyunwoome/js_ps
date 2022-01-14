const solution = (S, N, arr) => {
  const cache = new Array(S).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (!cache.includes(arr[i])) {
      cache.unshift(arr[i]);
      cache.pop();
    } else {
      let index = cache.indexOf(arr[i]);
      cache.splice(index, 1);
      cache.unshift(arr[i]);
    }
  }
  return cache.join(' ');
};

const S = 5;
const N = 9;
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(S, N, arr));
