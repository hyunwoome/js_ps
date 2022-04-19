const cellsInRange = (s) => {
  const [start, end] = s.split(":");

  const startCol = start[0]; // K
  const endCol = end[0]; // L
  const startRow = Number(start[1]); // 1
  const endRow = Number(end[1]); // 2

  const startColToAscii = startCol.charCodeAt(); // 75
  const endColToAscii = endCol.charCodeAt(); // 76

  const result = [];

  for (let i = startColToAscii; i <= endColToAscii; i++) {
    const col = String.fromCharCode(i);

    for (let j = startRow; j <= endRow; j++) {
      const colRow = col + String(j);
      result.push(colRow);
    }

  }

  return result;
};


s = "A1:F30"
console.log(cellsInRange(s))