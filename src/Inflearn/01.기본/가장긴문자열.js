const solution = (arr) => {
  let len = 0;
  let result = '';
  for (const s of arr) {
    if (len < s.length) {
      len = s.length;
      result = s;
    }
  }
  return result;
};

const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arr));
