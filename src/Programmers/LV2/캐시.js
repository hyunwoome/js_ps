function solution(cacheSize, cities) {
  let lowerCaseCities = cities.map((str) => str.toLowerCase());

  let cache = [];
  let answer = 0;

  for (let i = 0; i < lowerCaseCities.length; i++) {
    if (cache.includes(lowerCaseCities[i])) {
      let index = cache.indexOf(lowerCaseCities[i]);
      cache.splice(index, 1);
      cache.push(lowerCaseCities[i]);
      answer += 1;
    } else {
      cache.push(lowerCaseCities[i]);
      answer += 5;
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  }
  return answer;
}
