const solution = (arr) => {
  const result = [];
  const origin = [...arr];
  const sort = arr.sort((a, b) => a - b);
  for (let i = 0; i < origin.length; i++) {
    if (sort[i] !== origin[i]) result.push(i + 1);
  }
  return result.join(' ');
};

const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
