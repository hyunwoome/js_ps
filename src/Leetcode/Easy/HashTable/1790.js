const areAlmostEqual = (s1, s2) => {
  if (s1 === s2) return true;
  let swapCount = 0;

  for (let i = 0; i < s1.length; i++) {
    const str = s1[i];

    if (str !== s2[i]) {
      if (!s2.includes(str)) return false;
      swapCount++;
    }
    if (swapCount > 2) return false;
  }
  return swapCount !== 1;
};


const s1 = 'bank';
const s2 = 'kanb';
console.log(areAlmostEqual(s1, s2));
