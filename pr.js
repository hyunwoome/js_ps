function solution(d, m) {
  let result = 0;
  let tmp = 1;
  let i = 0;

  while (m > 0) {
    if (i < d.length) {
      if (d[i] >= tmp) {
        m -= tmp;
        tmp *= 2;
        i++;
        result++;
      } else {
        i++;
        tmp = 1;
        result++;
      }
    } else {
      return -1;
    }
  }
  return result;
}

const d = [2, 2, 4, 3];
const m = 8;
console.log(solution(d, m));
