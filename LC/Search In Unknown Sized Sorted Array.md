### Search In Unknown Sized Sorted Array

Given a integer dictionary A of unknown size, where the numbers in the dictionary are sorted in ascending order, determine if a given target integer T is in the dictionary. Return the index of T in A, return -1 if T is not in A.

#### Assumptions
- dictionary A is not null
- dictionary.get(i) will return null if index i is out of bounds

[x, x, x, x, x, x, x, x, x, x, x, x,....,T, x, x, x, null, null]

#### Examples


```js
// 因为不知道边界在哪里， 所以先2X 从前往后跳直到找到边界 或者 element 已经比target 大了
// 再在边界内binary search
const search = function(nums, target) {
    if (nums === null || nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = 1;

    while(nums[right] !== null && nums[right] < target) {
        // 更新left 为最近一次的right，前面的反正都比target小，可以丢弃
        left = right;
        right = right * 2; 
    }

    // 下面开始在left，right之间binary search， 此时的right，要么已经比target 大， 要么已经出界

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === null || nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

   return -1;
}
console.log(search([1, null],1));
console.log(search([1,2, 3, 4, 5, 6, 7, 9, 16, null, null...], 16));


```