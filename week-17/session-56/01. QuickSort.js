function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let pivotIndex=partition(arr,low,high);
        quickSort(arr,low,pivotIndex-1); // left
        quickSort(arr,pivotIndex+1,high); // right
    }
}
function partition(arr,low,high){
    let pivot= arr[high]; // choose the last element
    let i=low-1; // index of smaller element

    for (let j= low; j<high; j++){
        if(arr[j]<pivot){
            i++; // increment index of smaller element
            [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
        }
    }
    // place the pivot in the correct position
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]; // swap
    return i+1; // return the index of the pivot
}

let arr= [28,16,46,38,55,89,83,30];
quickSort(arr);
console.log(arr);