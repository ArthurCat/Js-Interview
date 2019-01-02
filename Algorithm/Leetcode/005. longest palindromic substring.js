/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }
  let newStr = '#';
  for (letter of s) {
    newStr += `${letter}#`;
  }
  let dp = [];
  let currentCenter = 0, currentRadius = 0;
  let lpsCenter = 0, lpsRadius = 0;
  let j;
  for (let i = 0; i < newStr.length; i++) {
    if (currentCenter + currentRadius > i) {
      j = currentCenter - (i - currentCenter);
      dp[i] = Math.min(dp[j], currentCenter + currentRadius - i);
    }
    else {
      dp[i] = 1;
    }
    while (i + dp[i] < newStr.length 
           && i - dp[i] >= 0 
           && newStr[i + dp[i]] == newStr[i - dp[i]]) {
      dp[i]++;
    }
    if (currentCenter + currentRadius < i + dp[i]) {
      currentCenter = i;
      currentRadius = dp[i];
    }
    if (lpsRadius < dp[i]) {
      lpsRadius = dp[i];
      lpsCenter = i;
    }
  }
  return s.substring((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2);
};
