### First Occurrence in Sorted Array

Given a target integer T and an integer array A sorted in ascending order, find the **index** of the first occurrence of T in A or return -1 if there is no such index.

#### Assumptions
- There can be duplicate elements in the array.
- If A is null or A of zero. We should return -1 in this case.

#### Examples

A = {1, 2, 3}, T = 2, return 1
A = {1, 2, 3}, T = 4, return -1
A = {1, 2, 2, 2, 3}, T = 2, return 1

```js
const firstOccurrenceInSortedArray = function(nums, target) {
    if (nums === null || nums.length === 0) {
        return -1;
    }

    // 停止条件： left right 相邻 (left = right - 1) / left right 重合 (left = right)
    let left = 0;
    let right = nums.length - 1;

    while (left < right - 1) {
        // check the mid 
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1; // cannot rule out mid
        } else { // nums[mid] > target
            right = mid - 1;
        }
    }

    // post-processing
    // case 1: array only have 1 element 
    // case 2: array only have 2 element
    // case 3: left = right - 1, and left is target
    // case 4: left = right - 1, and right is target
    // case 4: left = right - 1, and none is target

    if (nums[left] === target) {
        return left;
    } else if (nums[right] === target) {
        return right;
    }


   return -1;
}

console.log(firstOccurrenceInSortedArray([1,2,3], 2));
console.log(firstOccurrenceInSortedArray([1,2,3], 2));
console.log(firstOccurrenceInSortedArray([1,2,3], 4));
console.log(firstOccurrenceInSortedArray([3,4,5,6,6,9,16],3));
console.log(firstOccurrenceInSortedArray([1, 2, 2, 2, 3], 2));
console.log(firstOccurrenceInSortedArray([1],1));

```