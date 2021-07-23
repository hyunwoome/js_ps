function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/greedy/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const arr = input.map((el) => el.split(' ').map((el) => +el));

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr[0].length; j++) {
      let L = arr[i][0];
      let P = arr[i][1];
      let V = arr[i][2];
      if (!L && !P && !V) return;
      count = Math.floor(V / P) * L;
      V = V % P;
      count += V < L ? V : L;
    }

    console.log(`Case ${i + 1}: ${count}`);
  }
}

solution();
