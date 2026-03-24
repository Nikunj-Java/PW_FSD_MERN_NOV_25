
function  linearSearch(arr,target){
    for(let i=0; i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

let arr=[4,2,1,7,11,9];
console.log("Index of the Target:",linearSearch(arr,99))