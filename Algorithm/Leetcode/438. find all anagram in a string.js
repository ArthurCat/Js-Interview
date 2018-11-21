/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const pMap = {};
  const pLength = p.length;
  const sLength = s.length;
  let count = 0;
  let result = [];
  
  for (let character of p) {
    if (pMap[character]) {
      pMap[character]++;
    } else {
      pMap[character] = 1;
    }
  }
  
  for (let i = 0; i < pLength; i++) {
    if (pMap[s[i]] !== undefined && pMap[s[i]]-- > 0) {
      count++;
    }
  }

  for(let i = 0; i < sLength - pLength + 1; i++) {
    if (count === pLength) {
      result.push(i);
    }
    if (pMap[s[i]] !== undefined && pMap[s[i]]++ >= 0 ) {
      --count;
    }
    if (pMap[s[i+pLength]] !== undefined && pMap[s[i+pLength]]-- > 0) {
      ++count;
    }
  }
  return result;
};
