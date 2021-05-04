function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) answer.push(arr1[i]);
    }
  }
  return answer.sort((a, b) => a - b).join(' ');
}

// 투포인터
// 각 배열을 정렬 후 값이 같지 않다면 작은 값을 증가시킴
// 값이 같으면 포인터를 둘 다 증가시킴
// 어느 한쪽이 끝나면 종료
// 복잡도는 O(N + M)

function solution1(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

let input1 = [1, 3, 9, 5, 2];
let input2 = [3, 2, 5, 7, 8];
console.log(solution(input1, input2));
console.log(solution1(input1, input2));
