function solution(nums) {
  const pokemonSize = new Set(nums).size;
  const pokemonVarietyCount = nums.length;
  return pokemonSize > pokemonVarietyCount / 2
    ? pokemonVarietyCount / 2
    : pokemonSize;
}

console.log(solution([3, 1, 2, 3]));
