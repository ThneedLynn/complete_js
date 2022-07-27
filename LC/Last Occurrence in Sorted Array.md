### Last Occurrence in Sorted Array

Given a target integer T and an integer array A sorted in ascending order, find the index of the last occurrence of T in A or return -1 if there is no such index.

#### Assumptions
- There can be duplicate elements in the array.
- If A is null or A of zero. We should return -1 in this case.

#### Examples

A = {1, 2, 3}, T = 2, return 1
A = {1, 2, 3}, T = 4, return -1
A = {1, 2, 2, 2, 3}, T = 2, return 3

```js
const lastOccurrenceInSortedArray = function(nums, target) {
    if (nums === null || nums.length === 0) {
        return -1;
    }

    // 停止条件： left right 相邻 (left = right - 1) / left right 重合 (left = right)
    let left = 0;
    let right = nums.length - 1;

    while (left < right - 1) {
        // check the mid 
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) { //因为找最后一个， 即使前面有一样的target 我们也不care
            left = mid;
        } else if (nums[mid] < target) {
            left = mid + 1; // cannot rule out mid
        } else { // nums[mid] > target
            right = mid - 1;
        }
    }

    // post-processing
    // case 1: array only have 1 element 
    // case 2: array only have 2 element
    // case 3: left = right - 1, and right is target
    // case 4: left = right - 1, and left is target
    // case 4: left = right - 1, and none is target

    if (nums[right] === target) {
        return right;
    } else if (nums[left] === target) {
        return left;
    }


   return -1;
}
console.log(lastOccurrenceInSortedArray([1],1));
console.log(lastOccurrenceInSortedArray([1,1], 1));
console.log(lastOccurrenceInSortedArray([1,2,3], 2));
console.log(lastOccurrenceInSortedArray([1,2,2], 2));
console.log(lastOccurrenceInSortedArray([3,4,5,6,6,9,16],6));
console.log(lastOccurrenceInSortedArray([1, 2, 2, 2, 2], 2));


```