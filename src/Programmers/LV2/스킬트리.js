function solution(skill, skill_trees) {
  let count = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let isPossible = true;
    let idx = 0;

    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skill.includes(skill_trees[i][j])) {
        if (skill_trees[i][j] === skill[idx]) {
          idx++;
        } else {
          isPossible = false;
          break;
        }
      }
    }
    if (isPossible) count++;
  }
  return count;
}

const skill = 'CBD';
const skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];
console.log(solution(skill, skill_trees));
