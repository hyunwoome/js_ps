function solution(record) {
  let answer = [];
  let newArr = record.map((log) => log.split(' '));
  let nickName = {};
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length === 3) nickName[newArr[i][1]] = newArr[i][2];
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === 'Enter')
      answer.push(nickName[newArr[i][1]] + '님이 들어왔습니다.');
    else if (newArr[i][0] === 'Leave')
      answer.push(nickName[newArr[i][1]] + '님이 나갔습니다.');
  }
  return answer;
}

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];
console.log(solution(record));
// [
//   'Prodo님이 들어왔습니다.',
//   'Ryan님이 들어왔습니다.',
//   'Prodo님이 나갔습니다.',
//   'Prodo님이 들어왔습니다.',
// ];
