/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let count = 0;
  let xXorY = x ^ y;

  while (xXorY > 0) {
    count++;
    xXorY &= xXorY - 1;
  }
  return count;
};
// return (x ^ y).toString(2).replace(/0/g, '').length;
