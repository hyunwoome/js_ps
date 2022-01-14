function solution(s) {
  const tmpArray = [];
  const lowerArray = s.toLowerCase();
  const splittedArray = lowerArray.split(' ');
  for (let i = 0; i < splittedArray.length; i++) {
    if (splittedArray[i][0] >= 'a' && splittedArray[i][0] <= 'z') {
      tmpArray.push(
        splittedArray[i][0].toUpperCase() + splittedArray[i].slice(1),
      );
    } else {
      tmpArray.push(splittedArray[i]);
    }
  }
  return tmpArray.join(' ');
}

const s = '3people unFollowed me';
console.log(solution(s));
