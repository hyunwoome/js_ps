function solution(strings, n) {
  return strings.sort((a, b) => {
    const tmp = a[n].localeCompare(b[n]);
    console.log(tmp);
    if (tmp === 0) {
      return a.localeCompare(b);
    }
    return tmp;
  });
}

console.log(solution(['sun', 'bed', 'car'], 1));
