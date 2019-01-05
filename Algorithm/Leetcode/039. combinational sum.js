/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  getCombination(candidates, target, result, [], 0);
  return result;
};

const getCombination = ((candidates, target, result, current, pointer) => {
  if (target < 0) {
    return;
  }
  else if (target == 0) {
    result.push(current.concat());
  } else {
    for (let i = pointer; i < candidates.length; i++) {
      current.push(candidates[i]);
      getCombination(candidates, target - candidates[i], result, current, i);
      current.pop();
    }
  }
});
