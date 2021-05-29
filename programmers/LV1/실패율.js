function solution(N, stages) {
  let totalNum = stages.length;
  let arr = [];
  for (let i = 1; i <= N; i++) {
    let stageNum = stages.filter((el) => el === i).length;
    console.log(stageNum);
    let failRatio = 0;
    if (stageNum === 0) {
      failRatio = 0;
    } else {
      failRatio = stageNum / totalNum;
    }
    totalNum -= stageNum;
    arr.push({ idx: i, ratio: failRatio });
  }
  arr.sort((a, b) => {
    if (a.ratio > b.ratio) {
      return -1;
    } else {
      if (a.idx > b.idx) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return arr.map((el) => el.idx);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
