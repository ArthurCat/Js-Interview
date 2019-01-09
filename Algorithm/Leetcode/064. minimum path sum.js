/**
 * @param {number[][]} grid
 * @return {number}
 */
//unoptimized O(n^2) O(mn)
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n -1];
};
//optimized O(n^2) O(min(m, n)
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let cur = Array(m).fill(grid[0][0]);
  
  for (let i = 1; i < m; i++) {
    cur[i] = cur[i - 1] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    cur[0] += grid[0][j];
    for (let i = 1; i < m; i++){
      cur[i] = Math.min(cur[i - 1], cur[i]) + grid[i][j];
    }
  }
  return cur[m - 1];
};
