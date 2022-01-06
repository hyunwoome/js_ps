const solution = (str) => {
  return +str.replace(/[^0-9]/g, '');
};

const str = 'g0en2T0s8eSoft';
console.log(solution(str));
