/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//ES6
var subsets = function(nums) {
  if (nums.length == 0) {
    return [[]];
  } else {  
    let rest = subsets(nums.slice(1));
    let newSets = rest.map(set => [nums[0], ...set]);
    return [...rest, ...newSets]};
};

//readability
var subsets = function(nums) {
  let result = [];
  
  const recursiveSubsets = (nums, cur, index) => {
    result.push([...cur]);
    for (let i = index; i < nums.length; i++) {     
      cur.push(nums[i]);
      recursiveSubsets(nums, cur, i + 1);
      cur.pop();
    }
  };
  
  recursiveSubsets(nums, [], 0);
  return result;
};
