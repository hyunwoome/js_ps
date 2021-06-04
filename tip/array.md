## 배열

### 빈 이중배열 만들기

```js
const empty2DArray = [...Array(input[0].length)].map(() =>
  Array(input.length).fill(0),
);
```

<br>

### `splice()`

- **배열 자르기**
- 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. **(원본배열 변경)**

```js
// 구문
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start: 배열의 변경을 시작할 인덱스, 음수인 경우 배열의 끝에서 센다
// deleteCount: 배열에서 제거할 요소의 수, 생략 시 모든요소 제거
// [item1, item2,...]: 배열에 추가할 요소, 생략 시 제거만 함

// 예시
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
// ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
console.log(months);
// ["Jan", "Feb", "March", "April", "May"]

console.log(months.splice(0, 2));
// [ 'Jan', 'Feb' ]
console.log(months);
// [ 'March', 'April', 'May' ]
```

<br>
