### 1부터 N까지의 합

<br>

- `for`문을 이용한 방법 (`O(N)`)

```js
const N = 10;
const answer = 0;
for (let i = 1; i <= N; i++) {
  answer += i;
}
console.log(answer); // 55
```

- 공식을 이용한 방법 (`O(1)`)

```js
const N = 10;
const answer = 0;
answer = (N * (N + 1)) / 2;
console.log(answer); // 55
```
