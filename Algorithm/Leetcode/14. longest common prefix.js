/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const strLength = strs.length;
  if(!strs[0]) return "";
  let ans = strs[0];
  for (let i = 0; i < strLength; i++) {
    if(!strs[i].startsWith(ans)) {
      for (let j = 0; j < ans.length; j++) {
        if (ans[j] != strs[i][j]) {
          ans = ans.slice(0, j);
        }
      }
    }
  }
  return ans;
};
