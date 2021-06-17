function solution(order, str) {
  let queue = order.split('');
  for (let x of str) {
    if (queue.includes(x)) {
      if (x === queue[0]) {
        queue.shift();
      }
    }
  }
  if (queue.length) return 'NO';
  return 'YES';
}

const order = 'CBA';
const str = 'JEMQBMLAC';
console.log(solution(order, str));
