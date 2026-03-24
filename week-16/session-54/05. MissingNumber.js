function missingNumber(nums) {
    nums.sort((a, b) => a - b);

    let left = 0, right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

nums=[0,1,2,4,5];
console.log("Missing Number:",missingNumber(nums));