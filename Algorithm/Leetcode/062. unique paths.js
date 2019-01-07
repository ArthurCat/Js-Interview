/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // let path = Array(m).fill(1).map(() => {
  //   return Array(n).fill(1);
  // });
  // O(n^2) O(min(m, n))
  if (m > n) {
    return uniquePaths(n, m);
  }
  let cur = Array(m).fill(1);
  
  for (let j = 1; j< n; j++) {
    for (let i = 1; i < m; i++) {
      cur[i] += cur[i - 1]
    }
  }
  return cur[m - 1];
};
