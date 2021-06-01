function solution(w, h) {
  function gcd(a, b) {
    const mod = a % b;
    if (mod === 0) {
      return b;
    }
    return gcd(b, mod);
  }
  const gcdValue = gcd(w, h);
  return w * h - (w + h - gcdValue);
}

const w = 8;
const h = 12;
console.log(solution(w, h));
