function solution(N, stages) {
  let arr = [];
  let totalNum = stages.length;

  for (let i = 1; i <= N; i++) {
    // 1단계 한명, 2단계 세명, 3단계 2명, 4단계 한명, 6단계 0명
    let stageNum = stages.filter((el) => el === i).length;
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

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

// 아직 클리어 못한 수 / 도달한 수
// 전체 스테이지 수 : N (5)
// 멈춰있는 스체이지 번호 (stages)
// 실패율이 높은 스테이지부터 내림차순으로 반환
