/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let dest = [];
  let count = [];
  for (let i = 0; i < paths.length; i++) {
    for (let j = 0; j < paths[i].length; j++) {
      dest.push(paths[i][1]);
      break;
    }
  }
  dest.forEach((el) => {
    let answer = 0;
    for (let i = 0; i < paths.length; i++) {
      if (paths[i].includes(el)) {
        answer++;
      }
    }
    count.push(answer);
  });
  let min = count.indexOf(Math.min(...count));
  return dest[min];
};

const path = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];

console.log(destCity(path));
