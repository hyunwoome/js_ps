const solution = (s) => {
  const catchNums = (alphabet) => {
    if (alphabet === 'zero') return '0';
    else if (alphabet === 'one') return '1';
    else if (alphabet === 'two') return '2';
    else if (alphabet === 'three') return '3';
    else if (alphabet === 'four') return '4';
    else if (alphabet === 'five') return '5';
    else if (alphabet === 'six') return '6';
    else if (alphabet === 'seven') return '7';
    else if (alphabet === 'eight') return '8';
    else if (alphabet === 'nine') return '9';
    return;
  };

  let result = '';
  let alphabet = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
      result += s[i];
      alphabet = '';
    } else {
      alphabet += s[i];
      if (catchNums(alphabet)) {
        result += catchNums(alphabet);
        alphabet = '';
      }
    }
  }
  return +result;
};

const s = '123';
console.log(solution(s));
