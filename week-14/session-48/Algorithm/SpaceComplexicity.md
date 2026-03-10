# Space Complexicity
- the space occupied by an algorithm and a variables in the program
# How it Can Be Calculated ?
- lets understand based on one Example
## Analysis
```
function createArray(n){
    let arr= [];

    for(let i=0; i<n;i++){
        arr.push(i);
    }
    return arr;

}

console.log(createArray(90));
```
## Explanation
Memory used:
```
arr size= n;
```
Space Complexicity:
```
O(n)
```