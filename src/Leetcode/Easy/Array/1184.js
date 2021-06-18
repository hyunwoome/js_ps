/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  // swap
  if (start > destination) [start, destination] = [destination, start];
  const total = distance.reduce((acc, cur) => acc + cur);
  const route = distance
    .slice(start, destination)
    .reduce((acc, cur) => acc + cur);
  return Math.min(total - route, route);
};

const distance = [1, 2, 3, 4];
const start = 0;
const destination = 1;
console.log(distanceBetweenBusStops(distance, start, destination));
