function solution(x) {
  let str = (x + '').split('').reduce((acc, cur) => +acc + +cur);
  return x % str ? false : true;
}

console.log(solution(13));
