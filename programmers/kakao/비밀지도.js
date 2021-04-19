// function solution(n, arr1, arr2) {
//   var answer = [];
//   let newArr1 = [];
//   let newArr2 = [];
//   for (let i = 0; i < n; i++) {
//     let tmpArr1 = [];
//     let str1 = arr1[i].toString(2);
//     for (let j = 0; j < n - str1.length; j++) {
//       tmpArr1.push('0');
//     }
//     for (let j = 0; j < str1.length; j++) {
//       tmpArr1.push(str1[j]);
//     }
//     newArr1.push(tmpArr1);

//     let tmpArr2 = [];
//     let str2 = arr2[i].toString(2);
//     for (let j = 0; j < n - str2.length; j++) {
//       tmpArr2.push('0');
//     }
//     for (let j = 0; j < str2.length; j++) {
//       tmpArr2.push(str2[j]);
//     }
//     newArr2.push(tmpArr2);
//   }
//   for (let i = 0; i < n; i++) {
//     let str = '';
//     for (let j = 0; j < n; j++) {
//       if (newArr1[i][j] === '1' || newArr2[i][j] === '1') {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     answer.push(str);
//   }
//   return answer;
// }

function solution(n, arr1, arr2) {
  const transBinaryScale1 = arr1.map((num) => num.toString(2));
  const transBinaryScale2 = arr2.map((num) => num.toString(2));
  const sum = transBinaryScale1.map((binary, index) => {
    return ((n, result) => '0'.repeat(n - result.length) + result)(
      n,
      String(Number(binary) + Number(transBinaryScale2[index])),
    )
      .split('')
      .map((num) => {
        if (num === '0') return ' ';
        return '#';
      })
      .join('');
  });
  return sum;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
