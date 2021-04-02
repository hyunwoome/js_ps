# Quicksort

Quicksort는 재귀를 이용한 분할정복 알고리즘이다. (Divide and Conquer) Quicksort는 큰 배열을 두 개의 하위 배열로 나누고 하위 배열을 재귀적으로 정렬한다.

구현 순서는 다음과 같다:

1. 배열에서 피벗(pivot)이라 불리는 임의의 요소를 선택한다.
2. 파티셔닝: 피벗보다 작은 값을 가진 요소는 피벗 앞에 오도록 배열을 재정렬하고, 피벗보다 큰 값을 가진 모든 요소가 그 뒤에 오도록 한다. 즉, 피벗이라는 기준값을 잡고 피벗과 배열의 모든 값을 비교하여 작은 값 / 큰 값 으로 나눈다.
3. 위 과정을 재귀적으로 실행한다.

## Complexity

| Name           |     Best      |    Average    |     Worst     | Memory | Stable | Comments                                                      |
| -------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------------------------------------------------------------ |
| **Quick sort** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |

## Reference

- [JavaScript Algorithms](https://github.com/trekhleb/javascript-algorithms)
