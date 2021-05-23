function solution(new_id) {
  // step1
  new_id = new_id.toLowerCase();
  // step2 alphanumerica, -, _, . => 정규식으로 해결
  new_id = new_id.replace(/[^\w-\._]+/g, '');
  // step3
  new_id = new_id.replace(/[\.]{2,}/g, '.');
  // step4
  new_id = new_id[0] === '.' ? new_id.slice(1) : new_id;
  new_id =
    new_id[new_id.length - 1] === '.'
      ? new_id.slice(0, new_id.length - 1)
      : new_id;
  // step5
  new_id = new_id.length === 0 ? 'a' : new_id;
  // step6
  new_id = new_id.length > 15 ? new_id.slice(0, 15) : new_id;
  new_id = new_id[14] === '.' ? new_id.slice(0, 14) : new_id;
  // step7
  if (new_id.length < 3) {
    new_id = new_id + new_id[new_id.length - 1].repeat(2);
    new_id = new_id.slice(0, 3);
  }
  return new_id;
}

const new_id = '...!@BaT#*..y.abcdefghijklm';
console.log(solution(new_id));
