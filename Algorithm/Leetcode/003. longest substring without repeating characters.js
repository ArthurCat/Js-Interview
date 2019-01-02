/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let start = 0;  
  
  return s.split('').reduce((max, v, i) => {
    if (map[v] >= start) {
      start = map[v] + 1;
    }
    map[v] = i;
    return Math.max(max, i - start + 1);
  }, 0);
};
