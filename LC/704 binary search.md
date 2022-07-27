### Binary Search
原则
1. We must gaurantee that the search space that (possibly contains the target to find) decrease over time (after each iteration).所以一般都是有一定逻辑sort过的
2. We must ganrantee that the target if(exits) cannot be ruled out.保证每次抛弃的部分不可能有target


### Note 
1. while loop 的终止条件可以用1,2个element的case 来确定
一般不外乎  - left right 相邻 + post processing
           - right left  交错
           - left/right 在同一位置 + post processing
2. 缩小的条件： 不要rule out possible target

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
constraints:
1. sorted in ascending order
2. all elements are unique

*/

var search = function(nums, target) {
    // corner case: invalid nums
    if (nums === null || nums.length === 0) {
        return -1;
    }
    
    // binary search: use two pointer 
    // xxxxxxxxxx
    // l   m    r
    // evaluate the mid element, to rule out left part or right part every time
    // 1. if mid = target, return 
    // 2. if mid < target, left = mid + 1, rule out left part
    // 3. if mid > target, right = mid - 1, rule out right part
    
    // stop condition: 
    // 1.  x
    //    l/r
    
    // 2. x x
    //   l/m r
    
    let left = 0;
    let right = nums.length - 1;
    
    //  x 
    // l/r
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else { // mid > target
            right = mid - 1;
        }  
    }
    
    // if no founding in the while loop, then target does not exist
    return -1; 
    
};
```
