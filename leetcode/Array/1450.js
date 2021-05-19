/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let answer = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      answer++;
    }
  }
  return answer;
};

const startTime = [1, 2, 3];
const endTime = [3, 2, 7];
const queryTime = 4;
console.log(busyStudent(startTime, endTime, queryTime));
