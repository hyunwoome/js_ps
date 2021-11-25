const solution = (a, b) => {
  // 1: 가위, 2: 바위, 3: 보
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      if (b[i] === 1) console.log('D');
      else if (b[i] === 2) console.log('B');
      else console.log('A');
    }
    if (a[i] === 2) {
      if (b[i] === 2) console.log('D');
      else if (b[i] === 3) console.log('B');
      else console.log('A');
    }
    if (a[i] === 3) {
      if (b[i] === 3) console.log('D');
      else if (b[i] === 1) console.log('B');
      else console.log('A');
    }
  }
};

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
solution(a, b);
