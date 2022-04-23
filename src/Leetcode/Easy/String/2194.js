const cellsInRange = (s) => {
  const [start, end] = s.split(":");
  const [startCol, startRow] = start;
  const [endCol, endRow] = end;
  const startColToAscii = startCol.charCodeAt(); // 75
  const endColToAscii = endCol.charCodeAt(); // 76

  const result = [];

  for (let i = startColToAscii; i <= endColToAscii; i++) {
    const _col = String.fromCharCode(i);
    for (let j = Number(startRow); j <= Number(endRow); j++) {
      const _colRow = _col + String(j);
      result.push(_colRow);
    }
  }

  return result;
};

s = "A1:F30"
console.log(cellsInRange(s));