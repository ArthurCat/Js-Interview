/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const mapping = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  
  let result = [];
  if (!digits || digits.length == 0) {
    return [];
  }
  if (digits.length === 1) {
    return mapping[digits];
  }

  let current = letterCombinations(digits.substr(0, 1));
  let remain = letterCombinations(digits.substr(1));

  for (c of current) {
    for (r of remain) {
      result.push(c + r)
    }
  }

  return result;
};

