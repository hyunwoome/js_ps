/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let one = coordinates[0].charCodeAt(0) - 96;
  let two = Number(coordinates[1]);

  if (one % 2 && two % 2) return false;
  else if (!(one % 2) && !(two % 2)) return false;
  else if (!(one % 2) && two % 2) return true;
  else return true;
};

const coordinates = 'a1';
console.log(squareIsWhite(coordinates));

// black = false;
// white = true;
