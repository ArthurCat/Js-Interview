/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let start = searchFromLeft(nums, target);
  let end = searchFromRight(nums, target);
  return [start, end];
};

const searchFromLeft = (nums, target) => {
  let left = 0;
  let right = nums.length -1;
  
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  if (nums[left] == target) {
      return left;
  } else {
    return -1;
  }
};

const searchFromRight = (nums, target) => {
  let left = 0;
  let right = nums.length -1;

  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left + 1;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  
  if (nums[right] == target) {
      return right;
  } else {
    return -1;
  }
}
