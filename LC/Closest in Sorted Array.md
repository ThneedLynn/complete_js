### Closest in sorted array



```js
// 返回cloest element index
// 有可能会有duplicate, There can be duplicate elements in the array, and we can return ANY of the indices with same value.
const closestInSortedArray = function(nums, target) {
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
            return mid;
        } else if (nums[mid] < target) {
            left = mid; // cannot rule out mid
        } else { // nums[mid] > target
            right = mid;
        }
    }

    // post-processing 查看左右element哪个离target最近
    if (Math.abs(nums[left] - target) <= Math.abs(nums[right] - target)) {
        return left;
    } else {
        return right;
    }
    
    // 写在后面: 如果cloest有duplicate，并且要求返回第一个重复元素的index，则找到最近的值以后还要向前验证看它是不是第一元素
}

console.log(closestInSortedArray([1,2,3], 2));
console.log(closestInSortedArray([1,4,6], 3));
console.log(closestInSortedArray([1,4,6], 5));
console.log(closestInSortedArray([1,3,3,4], 2));
console.log(closestInSortedArray([3,4,5,6,6,12,16],10));

```

### 复杂度
`lgn`