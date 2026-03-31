// sort array by parity
let arr = [3,1,2,4];
let evenIndex = 0; // pointer for even numbers  
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // check if the number is even
        [arr[evenIndex], arr[i]] = [arr[i], arr[evenIndex]]; // swap
        evenIndex++; // move the pointer for even numbers
    }
}
//console.log(arr);

// Sort by Quick Sort
function sortArrayByParity(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        if (nums[left] % 2 > nums[right] % 2) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }

        if (nums[left] % 2 === 0) left++;
        if (nums[right] % 2 === 1) right--;
    }

    return nums;
}

console.log(sortArrayByParity(arr));