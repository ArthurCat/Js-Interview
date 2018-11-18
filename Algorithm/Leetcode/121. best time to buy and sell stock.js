/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  
  prices.forEach(val => {
    minPrice = Math.min(minPrice, val);
    maxProfit = Math.max(maxProfit, val - minPrice);
  });
  return maxProfit;
};
