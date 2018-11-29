/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER; 
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
    if (nums[i] < max) {
      min = Math.min(nums[i], min);
      end = i;
    }
  }
  if (end === 0) {
    return end;
  }
  for (let i = 0; i < nums.length; i++) {
    if (min < nums[i]) {
      start = i;
      break;
    }
  }
  return end - start + 1;
};
