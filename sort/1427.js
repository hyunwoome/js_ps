// boj 10989 (83) ('/dev/stdin')

const fs = require('fs');
const input = fs.readFileSync('sort/input', 'utf8').trim().split('');
console.log(input.sort((a, b) => b - a).join(''));
