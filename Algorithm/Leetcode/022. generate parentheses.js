/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];

  recursiveGenerate(n, n, '', result);
  return result;
};

const recursiveGenerate = (left, right, current, result) => {
  if (left > right) {
    return;
  }
  if (!left && !right) {
    result.push(current);
  }
  if (left) {
    recursiveGenerate(left - 1, right, current + '(', result);
  }
  if (right) {
    recursiveGenerate(left, right - 1, current + ')', result);
  }
}
