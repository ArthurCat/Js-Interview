/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s){
  const map = {'{':'}','(':')','[':']'};
  let stack = [];
  for(let c of s){
    if (map[c]) stack.push(map[c]);
    else if (c != stack.pop()) return false;
  }
  return stack.length === 0;
}
