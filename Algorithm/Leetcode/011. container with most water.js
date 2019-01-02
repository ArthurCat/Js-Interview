/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left  = 0;
  let right = height.length - 1;
  let maxWater = Number.MIN_SAFE_INTEGER;
  
  while (left < right) {
    maxWater = Math.max(maxWater, Math.min(height[left], height[right])* (right - left));
    if (height[left] < height[right]) {
      left++;
    }
    else {
      right--;
    }
  }
  return maxWater;
};
