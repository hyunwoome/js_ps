const solution = (s) => {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = s;
  for (let i = 0; i < numbers.length; i++) {
    let arr = result.split(numbers[i]);
    result = arr.join(i);
  }
  return result;
};

const s = 'one4seveneight';
console.log(solution(s));
