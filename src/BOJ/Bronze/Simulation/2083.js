function solution() {
  const filePath =
    process.platform === 'linux'
      ? '/dev/stdin'
      : 'src/boj/bronze/simulation/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  for (let i = 0; i < input.length; i++) {
    let [name, age, weight] = input[i].split(' ');
    if (name === '#') break;
    if (+age > 17 || +weight >= 80) console.log(`${name} Senior`);
    else console.log(`${name} Junior`);
  }
}

solution();
