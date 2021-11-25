const solution = (arr) => {
  const set = new Set(arr);
  return [...set];
};

const arr = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(arr));

const solution2 = (arr2) => {
  let answer = '';
  answer = arr2.filter((v, i) => {
    return arr2.indexOf(v) === i;
  });
  return answer;
};

const arr2 = ['good', 'time', 'good', 'time', 'student'];
console.log(solution2(arr2));
