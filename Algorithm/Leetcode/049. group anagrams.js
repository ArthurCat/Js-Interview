/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length == 0) {
    return [];
  }
  let result = new Map();
  
  const getKey = (str => {
  let key = 1;
  for(let i = 0; i < str.length; i++) {
    key = primes[str.charCodeAt(i) - 97] * key;
  }
  return key;
  });
  
  const primes = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 
                  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 
                  89, 97, 101, 107];
  for (w of strs) {
    let key = getKey(w);
    if(result.has(key)) {
      result.get(key).push(w);
    } else {
      result.set(key,  [w]);
    }
  }
  return [...result.values()];
};

