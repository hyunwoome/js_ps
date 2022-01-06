const solution = (date, cars) => {
  const units = cars.map((car) => car % 10);
  return units.filter((num) => num === date).length;
};

const date = 0;
const cars = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(date, cars));
