### Merge sort LC 912


```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Merge Sort: 
  8 1 2 8 4 3
  divide   812      843
          8  12    8  43
             1 2      4 3
  merge   8   12   8   34
            128     348
               12348
*/
const sortArray = function(nums) {
    
    if (nums === null || nums.length === 0) {
        return nums;
    }
    
    
    return mergeSort(nums, 0, nums.length - 1);
    
};

const mergeSort = function(nums, startIndex, endIndex) {
    
    // base case: only one element: no need to sort
    if (startIndex >= endIndex) {
        return [nums[startIndex]];
    }
    
    
    // divide the array into two part
    let midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    
    // [start, midIndex], [midIndex + 1, end]
    let leftPart = mergeSort(nums, startIndex,midIndex);
    let rightPart = mergeSort(nums, midIndex + 1, endIndex);
    
    // merge two sorted array 
    let result = mergeSorted(leftPart, rightPart);
    
    return result;
    
};

const mergeSorted = function(left, right) {
    
    let result = [];
    
    // 谁小移谁
    for (let i=0, j=0; i < left.length || j < right.length; ) {
        
        // if left array is finished, only push right one
        if (i === left.length) {
            result.push(right[j]);
            j++;
            continue;
        }
        
        // if right array is finished, only push left one
        if (j === right.length) {
            result.push(left[i]);
            i++;
            continue;
        }
        
        // 谁小移谁
        if(left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
        
    }
    
    return result;
    
};



```