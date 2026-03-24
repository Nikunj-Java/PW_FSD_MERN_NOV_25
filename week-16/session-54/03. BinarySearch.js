// 1. find the middle element
// 2. if target == mid -> return
// 3. if target < mid -> search left
// 4. if target > mid -> search right
// RECURSIVE APPROACH
// This is Very Fast: Time Complexity: O(logn)
function binarySearchRecursive(arr,target,left=0,right=arr.length-1){
    if(left > right) return -1;

    let mid= Math.floor((left+right)/2);

    if(arr[mid]=== target) return mid;

    if(arr[mid] < target){
        return binarySearchRecursive(arr,target,mid+1,right);
    }
    else{
        return binarySearchRecursive(arr,target,right,mid-1);
    }
}

let arr=[11,24,35,56,78,85,90,96];
let target=90;

console.log("Index of Target: ",binarySearchRecursive(arr,target));