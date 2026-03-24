# Find Missing Number
You are given an array of size 'n' containing numbers from 0 to n, but one number is missing.

## Example
```
[0,1,2,4,5]
```
Missing Number= 3

## Key Idea
in a perfecr Array
index = array
```
 nums[i]=i
```
But When Number is Missing this pattern will Break

## Step:1 Sort the Numbers
```
nums.sort((a,b)=>a-b);
```
## Step:2 Apply Binary Search

# Example
```
nums = [0, 1, 2, 4, 5]
```
## Step:1 Iteration -1
```
left=0, right=5
mid= (0 + 5)/2 = 2
nums[2]=2
```
- nums[mid]== mid -> OK
- Missing is on RIght

```
left = mid + 1
left = 2 + 1
left = 3
```
## Step:2 Iteration-2
```
left= 3, right = 5
mid = (3 + 5)/2
mid = 4
nums[4]=5
```
- nums[mid]> mid -> mismatch
- missing is on left

```
right = mid =4

```

## Step:3 Iteration-3
```
left=3, right=4
mid =(3 + 4)/2
mid = 3
nums[3]=4
```
- mismatch again
- move left

```
right =3
```
## Step:4 Loop Ends
```
left =3
Missing Number = 3
```
## Complexity
```
Time: O(log n)
Space: O(1)
```