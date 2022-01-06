const solution = (s, t) => {
  const right = [];
  const left = [];
  let rightMin = 0;
  let leftMin = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      rightMin = 0;
      right.push(rightMin);
    } else {
      rightMin++;
      right.push(rightMin);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      leftMin = 0;
      left.push(leftMin);
    } else {
      leftMin++;
      left.push(leftMin);
    }
  }

  const newLeft = left.reverse();
  const result = [];

  for (let i = 0; i < right.length; i++) {
    if (right[i] >= newLeft[i]) result.push(newLeft[i]);
    else result.push(right[i]);
  }
  return result.join(' ');
};

const s = 'teachermode';
const t = 'e';
console.log(solution(s, t));
