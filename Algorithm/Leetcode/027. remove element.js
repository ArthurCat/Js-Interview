/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums == null || nums.length == 0) {
      return 0;
    }
    for (let i = nums.length - 1; i >= 0 ; i--) {
      if (nums[i] == val) {
        nums.splice(i, 1);
      }
    }
    return nums.length;
};
