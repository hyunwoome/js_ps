const wordPattern = (pattern, s) => {
  const patArr = pattern.split('');
  const sArr = s.split(' ');
  const patSet = [...new Set(patArr)];
  const sSet = [...new Set(sArr)];
  let patMap = new Map();
  if (patSet.length !== sSet.length) return false;
  else for (let i = 0; i < patSet.length; i++) {
    patMap.set(patSet[i], sSet[i]);
  }
  for (let i = 0; i < patArr.length; i++) {
    patArr[i] = patMap.get(patArr[i]);
  }
  return patArr.join('') === sArr.join('');
};

const pattern = 'abba';
const s = 'dog cat cat dog';
console.log(wordPattern(pattern, s));