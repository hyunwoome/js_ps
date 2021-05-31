function solution(phone_book) {
  let asc = phone_book.sort((a, b) => a.length - b.length);
  let minLength = asc[0];

  let arr = [];
  for (let i = 1; i < phone_book.length; i++) {
    arr.push(phone_book[i].slice(0, minLength.length));
  }

  for (let i = 0; i < arr.length; i++) {
    if (minLength === arr[i]) return false;
  }
  return true;
}

const phone_book = ['12', '123', '1235', '567', '88'];
console.log(solution(phone_book));
