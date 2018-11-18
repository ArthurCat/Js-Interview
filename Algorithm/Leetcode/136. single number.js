/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let singleOne = 0;
  for (let num of nums)   {
    singleOne ^= num;
  }
  return singleOne;
}; 

/*
 return nums.reduce((a, b) => (a^b));
 */
