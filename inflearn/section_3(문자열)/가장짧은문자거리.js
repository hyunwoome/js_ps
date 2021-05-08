function solution(str, s) {
  let len = str.length;
  let arr1 = [];
  let arr2 = [];
  let answer = [];

  let p = 1000;
  for (let i = 0; i < len; i++) {
    if (str[i] !== s) p++;
    else p = 0;
    arr1.push(p);
  }

  let q = 1000;
  for (let i = len - 1; i >= 0; i--) {
    console.log(str[i]);
    if (str[i] !== s) q++;
    else q = 0;
    arr2.unshift(q);
  }

  for (let i = 0; i < len; i++) {
    if (arr1[i] >= arr2[i]) answer.push(arr2[i]);
    else answer.push(arr1[i]);
  }
  return answer;
}

console.log(solution('teachermode', 'e'));
