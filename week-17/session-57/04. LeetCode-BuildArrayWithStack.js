// you are given a target array and an integer n. In each iteration, you will read a number from 1 to n. Build the target array using the following operations:

// "Push": Read a new element from the list and push it in the array.
// "Pop": delete the last element of the array.
// If the target array is already built, stop reading more elements.

function buildArray(target, n){
    let result=[];
    let i=1;

    for( let num of target){
        while(i<num){
            result.push("Push"); // take the number
            result.push("Pop"); // remove the number
            i++;
        }
        result.push("Push"); // take the number
        i++;
    }
    return result;
}
console.log(buildArray([1,3],3)); // ["Push","Push","Pop","Push"]

// Explanation:
// Read number 1 and automatically push in the array => target array is [1]
// Read number 2 and automatically push in the array => target array is [1,2], then pop it => target array is [1]
// Read number 3 and automatically push in the array => target array is [1,3]

// operations:
// [1] => "Push"
// [1,2] => "Push"
// [1] => "Pop"
// [1,3] => "Push"

// Visual Understanding
// Numbers: 1 2 3
// Target:  1   3
// Result:  Push Push Pop Push

// Number               Action
// 1                    Push
// 2                    Push + Pop
// 3                    Push