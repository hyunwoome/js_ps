function solution(n) {
  function countBit(num) {
    let answer = 0;
    let binary = num.toString(2);
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') answer++;
    }
    return answer;
  }

  for (let i = n + 1; i < 1000000; i++) {
    let bits = countBit(n);
    if (bits === countBit(i)) return i;
  }
}

const n = 78;
console.log(solution(n));
