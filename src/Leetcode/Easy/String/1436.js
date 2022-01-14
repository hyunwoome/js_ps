/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let start = [];
  let dest = [];
  for (let i = 0; i < paths.length; i++) {
    start.push(paths[i][0]);
    dest.push(paths[i][1]);
  }

  for (let i = 0; i < dest.length; i++) {
    if (!start.includes(dest[i])) return dest[i];
  }
};

const paths = [
  ['B', 'C'],
  ['D', 'B'],
  ['C', 'A'],
];
console.log(destCity(paths));

// [cityA, cityB]
