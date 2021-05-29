function solution(numbers, hand) {
  function findLocation(num) {
    let keyPad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['*', 0, '#'],
    ];
    for (let i = 0; i < keyPad.length; i++) {
      let position = keyPad[i].indexOf(num);
      if (position !== -1) {
        return [i, position];
      }
    }
  }

  function distLocation(arr1, arr2) {
    let zero = Math.abs(arr1[0] - arr2[0]);
    let one = Math.abs(arr1[1] - arr2[1]);
    return zero + one;
  }

  let answer = '';
  let leftPosition = '*';
  let rightPosition = '#';

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers === 7) {
      leftPosition = numbers[i];
      answer += 'L';
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      rightPosition = numbers[i];
      answer += 'R';
    } else {
      let lp = findLocation(leftPosition);
      let rp = findLocation(rightPosition);
      let cur = findLocation(numbers[i]);
      let leftDiff = distLocation(lp, cur);
      let rightDiff = distLocation(rp, cur);

      if (leftDiff > rightDiff) {
        rightPosition = numbers[i];
        answer += 'R';
      } else if (leftDiff < rightDiff) {
        leftPosition = numbers[i];
        answer += 'L';
      } else if (leftDiff === rightDiff) {
        if (hand === 'right') {
          rightPosition = numbers[i];
          answer += 'R';
        } else if (hand === 'left') {
          leftPosition = numbers[i];
          answer += 'L';
        }
      }
    }
  }
  return answer;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';
console.log(solution(numbers, hand));
