// 1. find the middle element
// 2. if target == mid -> return
// 3. if target < mid -> search left
// 4. if target > mid -> search right
// ITERATIVE APPROACH
function  BinarySearch(arr,target){
    let left=0;
    let right= arr.length-1;
    //use while loop
    // formula mid= (left + right)/2
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid] === target) return mid;
        if(arr[mid]< target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return -1;
}

let arr=[11,24,35,56,78,85,90,96];
let target=90;

console.log("Index of Target: ",BinarySearch(arr,target));