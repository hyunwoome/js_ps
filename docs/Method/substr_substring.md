### substr과 substring의 차이

> 두 메서드의 차이점은 **두 번째 인자**에 있다.

- `substring`은 중지할 인덱스 번호 (포함하지 않음)

```js
let char = 'ABCDEFG';
// 1번 인덱스부터 2번 인덱스까지 (마지막 포함 X)
console.log(char.substring(1, 2));
// B
```

- `substr`은 반환할 최대 길이

```js
let char = 'ABCDEFG';
// 1번 인덱스부터 시작해서 2칸 후 까지 (마지막 포함 X)
console.log(char.substring(1, 2));
// BC
```
