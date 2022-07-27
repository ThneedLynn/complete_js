### Smallest Element Larger than Target in Sorted Array

Given a target integer T and an integer array A sorted in ascending order, find the index of the smallest element in A that is larger than T or return -1 if there is no such index.



#### Assumptions
- There can be duplicate elements in the array.

#### Examples
A = {1, 2, 3}, T = 1, return 1
A = {1, 2, 3}, T = 3, return -1
A = {1, 2, 2, 2, 3}, T = 1, return 1


```js
// 首先要找的element 一定比target 大
// 停止条件： left right 相邻 (left = right - 1) / left right 重合 (left = right)
const search = function(nums, target) {

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
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else { // nums[mid] > target
            right = mid; // cannot rule out mid
        }
    }

    // post-processing
    // case 1: array only have 1 element 
    // case 2: array only have 2 element
    // case 3: left = right - 1, and left is target
    // case 4: left = right - 1, and right is target
    // case 4: left = right - 1, and none is target

    if (nums[left] > target) {
        return left;
    } else if (nums[right] > target) {
        return right;
    }

   return -1;
}
console.log(search([1, 2, 3],1));
console.log(search([1, 2, 3], 3));
console.log(search([1, 2, 2, 2, 3], 1));
console.log(search([4,9,12,13,15,20,21,23,25,28,31,33,34,38,40,42,45,46,48,53,54,56,57,58], 6));


```