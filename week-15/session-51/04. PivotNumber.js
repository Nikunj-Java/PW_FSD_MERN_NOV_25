function pivotIndex(nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}
nums=[1,7,3,6,5,6];
console.log("Pivot Index:",pivotIndex(nums));
console.log("Pivot Number",nums[pivotIndex(nums)]);