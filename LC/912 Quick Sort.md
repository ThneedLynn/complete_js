### Quick sort LC 912


```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Quick Sort: 

两个挡板 三个区域： 8 1 4 2 9
随机选一个element作为pivot，我们要确定这个element的位置，
则需要把比它小的都放它左边，比它大的都放右边

然后再对left 和 right recursive quick sort 

所有操作都在原array 上，所以可以先把pivot swap 到一边
 
*/
const sortArray = function(nums) {
    
    // corner case check
    if (nums === null || nums.length === 0) {
        return nums;
    }
    
    return quickSort(nums, 0, nums.length - 1);
    
};

const swapInPlace = function(nums, index1, index2) {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]]
    
    return nums;
}

const quickSort = function(nums, left, right) {
    
    // base case 只有1个元素的时候，不用排了
    if(left >= right) {
        return nums;
    }
    
    // random select one element between [left, right] index
    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    let pivotNum = nums[pivotIndex];
    
    // xxxx  p xxxxx
    // l           r
    // swap the pivot to the end
    swapInPlace(nums, pivotIndex, right);
    // xxxx xxxxx p
    // l          r
    
    // now we need to arrange l -- r-1 
    // ssss xxxx lll
    //      i  j
    // [0, i) should all less than pivot;
    // (j, r-1] should all larger than pivot
    // [i, j] 之间都是未知区域
    // 中指条件： ij错过
    
    let i=left, j=right-1;
    for (; i <= j; ) {
        if (nums[i] < pivotNum) {
            i++;
        } else {
            // 将大的换到j的右边
            swapInPlace(nums, i, j);
            j--;
        }
    }
    
    //  ssss lllll p
    //  l  j i     r
    
    // put pivot back 
    swapInPlace(nums, i, right);
    
    //  ssss p lllll
    //  l  j i     r
    
    
    // do the same for left and right part
    quickSort(nums, left, i-1);
    quickSort(nums, i+1, right);
    
    return nums;
    
    
}



```