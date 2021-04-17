function solution(s) {
  let upper = s.toUpperCase();
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (upper[i] === 'P') {
      p++;
    } else if (upper[i] === 'Y') {
      y++;
    }
  }
  if (p === y) {
    return true;
  } else {
    return false;
  }
}

console.log(solution('Pyy'));
