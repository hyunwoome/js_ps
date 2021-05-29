function solution(n, lost, reserve) {
  // 중복 제거
  const realReserve = reserve.filter((el) => lost.indexOf(el) === -1);
  const realLost = lost.filter((el) => reserve.indexOf(el) === -1);

  const set = Array(n)
    .fill(0)
    .map((_, i) => (realLost.indexOf(i + 1) === -1 ? true : false));

  // set =  [true, false, true, false, true ]
  // [1, 3, 5]
  for (let hero of realReserve) {
    if (set[hero - 1 - 1] === false) {
      set[hero - 1 - 1] = true;
    } else if (set[hero - 1 + 1] === false) {
      set[hero - 1 + 1] = true;
    }
  }
  // set = [ true, true, true, true, true ]
  return set.filter((el) => el).length;
}

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
console.log(solution(n, lost, reserve));
