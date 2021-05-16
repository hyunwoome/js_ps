### 문자열 내림차순

```js
str.sort().reverse();
str.sort((a, b) => (a > b ? -1 : 1));
str.sort((a, b) => b.localeCompare(a));
```

### 문자열 인덱스 교환

```js
// str의 0번 인덱스를 빈 문자열로 교체
str.replace(str[0], '');
```
