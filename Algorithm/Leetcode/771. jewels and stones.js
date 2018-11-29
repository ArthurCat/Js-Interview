/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let result = 0;
  const jewels = new Set(J);
  for (let s of S) {
    if (jewels.has(s)) result++; //O(n)
  }
  return result;
};

/*
var numJewelsInStones = function(J, S) {
  let result = 0;
  for (let s of S) {
    if (J.includes(S)) result++; //O(n**2)
  }
  return result;
};
*/
