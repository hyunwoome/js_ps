function solution(word) {
  const str = 'AEIOU';
  const arr = [781, 156, 31, 6, 1];
  let index = word.length; // 3
  let result = word.length; // 3
  for (let i = 0; i < word.length; i++) { // 3
    index = str.indexOf(word.charAt(i)); // 1 2 3
    result += arr[i] * index;
  }
  return result;
}

const word = 'EIO';
console.log(solution(word));