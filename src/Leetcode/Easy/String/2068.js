const checkAlmostEquivalent = (word1, word2) => {
  for (let i = 0; i < word1.length; i++) {
    let word1Count = word1.length;
    let word2Count = word2.length;
    for (let j = 0; j < word1.length; j++) {
      if (word1[i] === word1[j]) word1Count--;
    }
    for (let k = 0; k < word2.length; k++) {
      if (word1[i] === word2[k]) word2Count--;
    }
    if (Math.abs(word1Count - word2Count) > 3) return false;
  }

  for (let i = 0; i < word2.length; i++) {
    let word1Count = word1.length;
    let word2Count = word2.length;
    for (let j = 0; j < word2.length; j++) {
      if (word2[i] === word2[j]) word2Count--;
    }
    for (let k = 0; k < word1.length; k++) {
      if (word2[i] === word1[k]) word1Count--;
    }
    if (Math.abs(word1Count - word2Count) > 3) return false;
  }
  return true;
};

const word1 = 'zzzyyy';
const word2 = 'iiiiii';
console.log(checkAlmostEquivalent(word1, word2));
