function solution() {
  const input = require('fs')
    .readFileSync('src/boj/bronze/string/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const vowels = 'aeiouAEIOU';
  while (true) {
    const str = input.shift();
    if (str === '#') break;
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) answer++;
    }
    console.log(answer);
  }
}

solution();
