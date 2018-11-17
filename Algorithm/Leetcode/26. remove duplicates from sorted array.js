/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }
  let size = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[size] != nums[i]) {
      nums[++size] = nums[i];
    }
  }
  // nums.splice(size + 1);
  // return nums.length;
  return size + 1;
};
