const solution = (sizes) => {
  const high = [];
  const low = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      high.push(sizes[i][0]);
      low.push(sizes[i][1]);
    } else {
      high.push(sizes[i][1]);
      low.push(sizes[i][0]);
    }
  }
  const highMax = Math.max(...high);
  const lowMax = Math.max(...low);
  return highMax * lowMax;
};

const sizes = [
  [10, 7], // 10 7
  [12, 3], // 12 3
  [8, 15], // 15 8
  [14, 7], // 14 7
  [5, 15], // 15 5
];
console.log(solution(sizes));
