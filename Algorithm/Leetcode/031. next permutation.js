/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 1;
  for (i; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      break;
    }
  }
  if (i != 0) {
    for (let j = nums.length - 1; j > i - 1; j--) {
      if (nums[j] > nums[i - 1]) {
        [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
        break;
      }
    }
    let j = nums.length - 1;
    while (i < j) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      i++;
      j--;
    }
    return nums;
  } else {
    return nums.sort((a, b) => a - b);
  }
};
