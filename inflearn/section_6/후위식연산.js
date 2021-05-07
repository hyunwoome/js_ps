// function solution(str) {
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0 && str[i] <= 9) {
//       stack.push(str[i]);
//     }
//     if (str[i] === '+') {
//       let rt = parseInt(stack.pop());
//       let lt = parseInt(stack.pop());
//       stack.push(lt + rt);
//     } else if (str[i] === '*') {
//       let rt = parseInt(stack.pop());
//       let lt = parseInt(stack.pop());
//       stack.push(lt * rt);
//     } else if (str[i] === '-') {
//       let rt = parseInt(stack.pop());
//       let lt = parseInt(stack.pop());
//       stack.push(lt - rt);
//     } else if (str[i] === '/') {
//       let rt = parseInt(stack.pop());
//       let lt = parseInt(stack.pop());
//       stack.push(parseInt(lt / rt));
//     }
//   }
//   return stack.pop();
// }

function solution1(str) {
  let answer = 0;
  let stack = [];
  for (let x of str) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack.pop();
  return answer;
}

const str = '352+*9-';
// console.log(solution(str));
console.log(solution1(str));
