// finding max and min Price
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    let profit = price - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}
stockPrice=[7,5,1,3,6,4,2];
console.log(maxProfit(stockPrice));
// price=7  minPrice=7  profit=7-7=0 maxProfit=0
// price=1  minPrice=1  profit=1-1=0 maxProfit=0
// price=5  minPrice=1  profit=5-1=0 maxProfit=4
// price=6  minPrice=1  profit=6-1=0 maxProfit=5 // true
// with this algorithm you can track the best buying price
// Always compute the best Selling Price