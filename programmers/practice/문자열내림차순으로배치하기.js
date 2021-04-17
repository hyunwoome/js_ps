function solution(s) {
  let upper = '';
  let lower = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      upper += s[i];
    } else {
      lower += s[i];
    }
  }
  return (
    lower
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join('') +
    upper
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join('')
  );
}

console.log(solution('Zbcdefg'));
