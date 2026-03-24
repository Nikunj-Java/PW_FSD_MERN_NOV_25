# Problem: Find a Peak Element
A peak Element is : Greater than its neighbour

## Key Idea
We use this Observation:
```
nums[mid] > num[mid+1]
```
- if TRUE  -> peak element is on left(including mid)
- if FALSE -> peak element is on Right

# Example
```
nums=[1,2,3,1]
```

## Iteration :1
```
left =0, right=3
mid = (left + right)/2 
mid = 1

Therefore
nums[mid]= 2
nums [mid+1]=3
```
- since 2<3 -> going up, which is correct
- peak element is on right

## Iteration :2
```
left =2, right=3
mid = (left + right)/2 
mid = 2

Therefore
nums[mid]= 3
nums [mid+1]=1
```
- 3 >1 -> going down
- peak is on left

```

right = mid =2
```
## Loop Ends
```
Peak Index= 2
Value =3
```