function solution(bridge_length, weight, truck_weights) {
  let takenTime = 0; // 걸린시간
  let queue = Array(bridge_length).fill(0); // 다리상태
  let queueSum = 0; // 다리무게
  let now_truck = truck_weights.shift(); // 현재 지나는 트럭 // 7
  queue.unshift(now_truck); // 7 넣고
  queue.pop(); // 뒤의 0 제거 // 그래야 갯수가 맞음
  queueSum += now_truck; // 7
  takenTime++;
  // --- 여기까지 트럭이 다리에 오르는 과정 (시간은 올라갈 때 1초)
  // 다리무게가 0이되면 종료
  while (queueSum) {
    // 다리에 있는 트럭이 이동하면 다리무게 에서 트럭을 제거
    queueSum -= queue.pop(); // 7 빠짐

    // 다리 안건넌 트럭을 빼고,
    now_truck = truck_weights.shift(); // 4

    // 다리에 들어갈 수 있으면 다리에 트럭 넣고 무게 증가
    if (now_truck + queueSum <= weight) {
      queue.unshift(now_truck);
      queueSum += now_truck;
    } else {
      queue.unshift(0);
      truck_weights.unshift(now_truck);
    }
    takenTime++;
  }
  return takenTime;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
