const solution = (n, k) => {
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  while (queue.length !== 1) {
    let i = k - 1;
    while (i) {
      queue.push(queue.shift());
      i--;
    }
    queue.shift();
  }
  return queue.join('');
};

const n = 8;
const k = 3;
console.log(solution(n, k));
