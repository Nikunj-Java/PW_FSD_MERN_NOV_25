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
```
Operations: n
Complexicity: O(n)
```

Example:2
```
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        console.log(i,j);
    }
}
```
Answer:
```
Operations: n x n
Complexicity: O(n^2)
```

Example:3
```
for(let i=1;i<n;i=i*2){
console.log(i);
}

```
Answer:

```
Operations: 1,2,4,8,16,.....= log n
Complexicity: O(log n)

```
