process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = '';
  for (let i = 0; i < b; i++) {
    let sum = '';
    for (let j = 0; j < a; j++) {
      sum += '*';
    }
    answer += `${sum}\n`;
  }
  console.log(answer);
});
