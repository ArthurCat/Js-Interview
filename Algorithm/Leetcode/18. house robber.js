/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  // option 1 - rob this house, and combine with the best option of -2
  // option 2 - don't rob this house, combine with the best option of -1
  let robbed = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    robbed[i] = i > 1 ? 
      Math.max(robbed[i - 2] + nums[i], robbed[i - 1]) :
      Math.max(nums[i], robbed[i - 1]);
  }
  return robbed[nums.length - 1];
};
