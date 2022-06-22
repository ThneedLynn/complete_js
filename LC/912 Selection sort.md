### Selection sort LC 912


```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Selection sort: 
 0 1 2 |  8 8 4 3
          i
          每轮找到 local min 和 i 的元素swap --> move to next 
*/
var sortArray = function(nums) {
    
    // check if nums has length
    if (nums === null || nums.length === 0) {
        return nums;
    }
    
    for (let i=0; i < nums.length; i++) {
        let localMinIndex = i;
        
        // find the min value's index in the remaining array
        for (let j=i; j < nums.length; j++) {
            if (nums[j] < nums[localMinIndex]) {
                localMinIndex = j;
            }
        }
        
        // swap the min value in the remaining with the i element, and move to next one
        [nums[i], nums[localMinIndex]] = [nums[localMinIndex], nums[i]];
    }
    
    return nums;
    
};

```