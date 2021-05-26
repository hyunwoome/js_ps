/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let units = 0;

  for (const [boxes, boxUnits] of boxTypes) {
    if (!truckSize) return units;
    const boxToPlaces = Math.min(truckSize, boxes);
    truckSize -= boxToPlaces;
    units += boxToPlaces * boxUnits;
  }
  return units;
};

// 5, 3, 4, 2
const boxTypes = [
  [5, 10],
  [2, 5],
  [4, 7],
  [3, 9],
];
const truckSize = 10;
console.log(maximumUnits(boxTypes, truckSize));
