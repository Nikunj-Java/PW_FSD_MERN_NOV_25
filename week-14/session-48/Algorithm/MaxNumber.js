let a=[10,45,23,89,34];
//basic Steps
// 1. Assume First element is largest
// 2. Compare with next element
// 3. if larger -> update max
// 4. Repeat until End

function findMaxNumber(arr){
    let max= arr[0];
    for (let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max= arr[i];
        }
    }
    return max;
}

console.log(findMaxNumber(a));

//space complexicity
//Memory Includes
//1. input storage
//2. Variables
//3. Auxilary Memory
function sum(arr){
    let total=0;
    for(let i=0; i<arr.length; i++){
        total +=arr[i];
    }
    return total;
}

console.log("Sum of all the element of an array:",sum(a));
