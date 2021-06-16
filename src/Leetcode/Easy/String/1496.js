/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let obj = {
    N: [1, 0],
    S: [-1, 0],
    E: [0, 1],
    W: [0, -1],
  };
  let x = 0;
  let y = 0;
  let arr = [[0, 0]];
  for (let i = 0; i < path.length; i++) {
    x += Number(obj[path[i]][0]);
    y += Number(obj[path[i]][1]);
    arr.push([x, y]);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (JSON.stringify(arr[i]) === JSON.stringify(arr[j])) return true;
    }
  }
  return false;
};

const path = 'NNSWWEWSSESSWENNW';
console.log(isPathCrossing(path));

// N : 북 [1, 0]
// S : 남 [-1, 0]
// E : 동 [0, 1]
// W : 서 [0, -1]

// NES
// [1, 0]
// [1, 1]
// [0, 1] <안지나감> false

// NESWW
// [1, 0]
// [1, 1]
// [0, 1]
// [0, 0] <지나감> true
// [0, -1]
