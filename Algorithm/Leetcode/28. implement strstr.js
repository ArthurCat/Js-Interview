/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const needleLen = needle.length;
  const haystackLen = haystack.length;

  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j == needleLen) return i;
      if (i + j == haystackLen) return -1;
      if (needle[j] != haystack[i + j]) break;
    }
  }
};
