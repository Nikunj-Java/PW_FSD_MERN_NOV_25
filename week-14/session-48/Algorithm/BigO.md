# What is Big-O Notation?
- Big O notation represents the upper bound (Worst case performance) of the algorithm
- it tells the maximum time an algorithms can take

## Example
Searching a Number in an array: [10,20,30,40,50]
Searching: 50;
```
10 = 50 ❌
20 = 50 ❌
30 = 50 ❌
40 = 50 ❌
50 = 50 ✅
```
Conclusion: it will compare with all the elements , then only you will get the final answer, which will take the more time as compatred to other elements

## Worst case:
```
    check all elements
```
## complexicity:
```
    O(n)
```