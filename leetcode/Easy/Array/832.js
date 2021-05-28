/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let arr = image.map((el) => el.reverse());
  arr.forEach((num) => {
    for (let i = 0; i < num.length; i++) {
      if (num[i]) num[i] = 0;
      else num[i] = 1;
    }
  });
  return arr;
};

const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

console.log(flipAndInvertImage(image));
