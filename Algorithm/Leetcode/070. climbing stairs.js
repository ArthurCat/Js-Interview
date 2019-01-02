/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let prev = 1;
  let curr = 1;
  for (i = 1; i < n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};
