function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/hash/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const N = Number(input.shift());
  const map = new Map();
  for (let i = 0; i < input.length; i++) {
    let [name, log] = input[i].split(' ');
    if (log === 'enter') map.set(name, 1);
    else map.delete(name, 1);
  }
  let arr = [];
  map.forEach((_, key) => {
    arr.push(key);
  });

  arr.sort().reverse();
  console.log(arr.join('\n'));
}

solution();
