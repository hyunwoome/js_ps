function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/string/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const TC = Number(input.shift());
  const arr = input.map((el) => el.split(' '));

  function isAnagram(A, B) {
    let sortingA = A.split('').sort().join('');
    let sortingB = B.split('').sort().join('');
    if (sortingA !== sortingB) return false;
    else return true;
  }

  for (let i = 0; i < TC; i++) {
    if (isAnagram(arr[i][0], arr[i][1]))
      console.log(`${arr[i][0]} & ${arr[i][1]} are anagrams.`);
    else console.log(`${arr[i][0]} & ${arr[i][1]} are NOT anagrams.`);
  }
}
solution();
