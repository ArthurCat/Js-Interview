/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
  let result = [];
  
  for (let num of nums) {
    let val = Math.abs(num) - 1;
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }
  
  nums.forEach((elem, index) => {
    if(elem > 0) {
      result.push(index + 1);
    }
  })
//   for (let index of nums.keys()) {
//     if(nums[index] > 0) {
//       result.push(index + 1);
//     }
//   }
  return result;
};

