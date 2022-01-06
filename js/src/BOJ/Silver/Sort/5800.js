function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/sort/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const K = Number(input.shift());

  for (let i = 0; i < K; i++) {
    let arr = input[i].split(' ').map(Number);
    arr.shift();

    let sortingArr = arr.sort((a, b) => b - a);
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let largestGap = 0;
    let j = 0;
    let k = 1;
    while (k !== sortingArr.length) {
      let sub = sortingArr[j] - sortingArr[k];
      largestGap = Math.max(largestGap, sub);
      j++;
      k++;
    }

    console.log(`Class ${i + 1}`);
    console.log(`Max ${max}, Min ${min}, Largest gap ${largestGap}`);
  }
}

solution();
