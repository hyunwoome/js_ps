function solution(new_id) {
  // 1. 소문자 변경
  const convertToLowerCase = new_id.toLowerCase();
  // 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거.
  // 3. 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환.
  // 4. 마침표(.)가 처음이나 끝에 위치한다면 제거.
  // 5. 빈 문자열이라면, "a"를 대입.
  // 6. 길이가 16자 이상이면, 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  const idRegex = convertToLowerCase
    .replace(/[^\a-z0-9-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.+|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  const len = idRegex.length;
  return len > 2 ? idRegex : idRegex + idRegex.charAt(len - 1).repeat(3 - len);
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
