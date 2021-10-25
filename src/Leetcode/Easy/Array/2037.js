/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => { return a - b });
  students.sort((a, b) => { return a - b });
  return seats.reduce((a, b, i) => a += Math.abs(seats[i] - students[i]), 0);
};

const seats = [3, 1, 5];
const students = [2, 7, 4];
console.log(minMovesToSeat(seats, students))