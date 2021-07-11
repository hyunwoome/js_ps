// boj 17413 (96) ('/dev/stdin')

const fs = require('fs').readFileSync('stack/input', 'utf8').trim();

let isTag = false;
let word = '';
let result = '';

for (let i = 0; i < fs.length; i++) {
  if (fs[i] === '<' || fs[i] === '>') {
    if (word) {
      result += word;
      word = '';
    }
    isTag = fs[i] === '<' ? true : false;
    result += fs[i];
    continue;
  }
  if (isTag) {
    result += fs[i];
  } else {
    if (fs[i] === ' ') {
      result += word + fs[i];
      word = '';
    } else {
      word = fs[i] + word;
    }
  }
}

if (word) {
  result += word;
}

console.log(result);
