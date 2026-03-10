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
# Find Space Complexicity of the Below Examples
Example:1
```
for(let i=0;i<n;i++){
console.log(i);
}
```
Answer:

Example:2
```
for(let i=0;i<n;i++){
console.log(i);
}
```

Example:3
```
for(let i=1;i<n;i=i*2){
console.log(i);
}

```

