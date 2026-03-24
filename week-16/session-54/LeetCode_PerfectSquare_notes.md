# Leet Code: isPerfectSquare using Binary Search
## Step:1 Initials:
```
left = 1
right = 16
```
## Step:2 Iteration 1
```
mid = (1 + 16 )/2 = 8
square = 8 * 8 =64
```
## Step:3 Conclusion
64 > 16 --> Too Big
Move Left Side
```
right = mid -1 = 7
```

## Step:4 Iteration 2
```
mid=(1 + 7)/2 = 4
square= 4 * 4
```

## Result
```
 16 === 16
```
Returns 'True'