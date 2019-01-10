/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  findSubsets(nums, result, [], 0);
  return result;
};

const findSubsets = (nums, result, cur, index) => {
  result.push([...cur]);
  for (let i = index; i < nums.length; i++) {
    if (i > index && nums[i] == nums[i - 1]) {
      continue;
    } else {
      cur.push(nums[i]);
      findSubsets(nums, result, cur, i + 1);
      cur.pop()
    }
  }
}
