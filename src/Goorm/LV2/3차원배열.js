// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
}).on("close", function () {
  const arr = [
    [
      [1, 2, 3], [4, 5, 6], [7, 8, 9]
    ],
    [
      [10, 11, 12], [13, 14, 15], [16, 17, 18]
    ],
    [
      [19, 20, 21], [22, 23, 24], [25, 26, 27]
    ]
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const tmp = [];
      for (let k = 0; k < arr[i][j].length; k++) {
        tmp.push(arr[i][j][k]);
      }
      console.log(tmp.join(' ') + ' ');
    }
    console.log(``);
  }


  process.exit();
});