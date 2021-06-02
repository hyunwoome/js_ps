## 문자열

### `startsWith()`

- **문자열 접두사 일치 여부**
- 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 `true`혹은 `false`로 반환한다.

```js
// 구문
str.startsWith(searchString[, position])
// searchString: 문자열의 시작 지점에서 탐색할 문자열
// [position]: searchString을 탐색할 위치. 기본값 0.

// 예시
var str = 'To be, or not to be, that is the question.';
console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true
```

<br>

### `includes()`

- **문자열 포함 일치 여부**
- 하나의 문자열이 다른 문자열에 포함되어 있는지 판별하고 결과를 `true`또는 `false`로 반환한다.

```js
// 구문
str.includes(searchString[, position])
// searchString: 이 문자열에서 찾을 다른 문자열
// [position]: searchString을 찾기 시작할 위치, 기본값 0

// 예시
const str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false
console.log(str.includes('TO BE')); // false
// includes()는 대소문자를 구별한다.
```

---
