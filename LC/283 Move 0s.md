### Move 0s to the end 相对顺序不变


```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    // use two points: i j
    // i slow one, the current write position
    // j fast one to iterate all elements
    
    if (nums === null || nums.length === 0) {
        return nums;
    }
    

    let slow = 0;
    let fast = 0;
    
    for(; fast < nums.length; fast++) {
        if (nums[fast] === 0) {
            // skip the copy
            continue;
        } else {
            // copy the fast element to slow position
            nums[slow++] = nums[fast];
        }
    }
    
    // write the remaining with 0
    while(slow < nums.length) {
        nums[slow++] = 0;
    }
    
};


```

### Move 0s to the end 相对顺序可变

```js
var moveZeroes = function(nums) {
    
    // use two points: i j
    // i slow one, the current write position
    // j fast one to iterate all elements
    
    if (nums === null || nums.length === 0) {
        return nums;
    }
    
    //[0, i) filtered part; no 0
    //[i， j] unknow
    //(j, end] 0
    
    // xxxxxxxxxxx
    // i         j
    // xxxxxxxxx00
    // i       j

    let i = 0;
    let j = nums.length - 1;
    
    
    while (i <= j) {
        if (nums[i] === 0) {
            // swap i j
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
        } else {
            i++;
        }
    }
    
};

```