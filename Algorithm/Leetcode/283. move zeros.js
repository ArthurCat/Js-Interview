/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let cur = 0, i = 0;
    for (let n of nums) {
      if (n !== 0) nums[cur++] = nums[i];
        i++;
    }
    while (cur < nums.length) nums[cur++] = 0;
};
