function solution(dartResult) {
  let num = 0;
  let answer = [];
  let tmp = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        tmp = 10;
        i++;
      } else {
        tmp = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      answer.push(tmp);
    } else if (dartResult[i] === 'D') {
      answer.push(Math.pow(tmp, 2));
    } else if (dartResult[i] === 'T') {
      answer.push(Math.pow(tmp, 3));
    } else if (dartResult[i] === '#') {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (let i = 0; i < answer.length; i++) {
    num += Number(answer[i]);
  }
  return num;
}

console.log(solution('1S2D*3T'));

// 다트를 세번 던짐
// 0 ~ 10점까지
// Single(1제곱), Double(2제곱), Triple(3제곱)
// * 스타상 : 해당점수와 바로 전에 얻은 점수를 각각 2배로 만듦
// # 아차상 : 해당 점수는 마이너스
// 첫번째 스타상이 나오면 첫번째 점수만 2배가 됨
// 중첩되면 점수는 4배
// 중첩된 아차상 (*#)이면 마이너스 4배
// 점수 | 보너스 | 옵션
