# JS 알고리즘 풀이를 위한 자주 쓰이는 메서드 정리

<br>

### 배열

#### Array.prototype.splice() (배열 자르기)

- `splice()` 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. **(원본배열 변경)**

- 구문

```js
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start: 배열의 변경을 시작할 인덱스, 음수인 경우 배열의 끝에서 센다
// deleteCount: 배열에서 제거할 요소의 수, 생략 시 모든요소 제거
// [item1, item2,...]: 배열에 추가할 요소, 생략 시 제거만 함
```

- 예시

```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// 배열의 변경을 시작할 인덱스: 1
// 제거할 요소의 수: 0
// 추가할 요소: 'Feb'
console.log(months);
// ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// 배열의 변경을 시작할 인덱스: 4
// 제거할 요소의 수: 1
// 추가할 요소: 'May'
console.log(months);
// ["Jan", "Feb", "March", "April", "May"]

console.log(months.splice(0, 2));
// splice는 0부터 2까지 자른 요소를 반환한다. (0 < 2)
// [ 'Jan', 'Feb' ]
console.log(months);
// splice를 한 원본 배열은 잘려진 나머지가 남게된다.
// [ 'March', 'April', 'May' ]
```

<br>

### 문자열

#### String.prototype.startsWith() (문자열 접두사 일치 여부)

- `startsWith()`메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 `true`혹은 `false`로 반환한다.

- 구문

```js
str.startsWith(searchString[, position])
// searchString: 문자열의 시작 지점에서 탐색할 문자열
// [position]: searchString을 탐색할 위치. 기본값 0.
```

- 예시

```js
var str = 'To be, or not to be, that is the question.';
console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true
```

#### String.prototype.includes() (문자열 포함 일치 여부)

- `includes()`메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지 판별하고 결과를 `true`또는 `false`로 반환한다.

- 구문

```js
str.includes(searchString[, position])
// searchString: 이 문자열에서 찾을 다른 문자열
// [position]: searchString을 찾기 시작할 위치, 기본값 0
```

- 예시

```js
const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false
console.log(str.includes('TO BE')); // false
// includes()는 대소문자를 구별한다.
```
