function solution(lottos, win_nums) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos.includes(win_nums[i])) {
      max++, min++;
    }
    if (lottos[i] === 0) {
      max++;
    }
  }
  function rank(num) {
    let answer = 0;
    switch (num) {
      case 6:
        answer = 1;
        break;
      case 5:
        answer = 2;
        break;
      case 4:
        answer = 3;
        break;
      case 3:
        answer = 4;
        break;
      case 2:
        answer = 5;
        break;
      default:
        answer = 6;
    }
    return answer;
  }
  let answer = [];
  answer.push(rank(max));
  answer.push(rank(min));
  return answer;
}
