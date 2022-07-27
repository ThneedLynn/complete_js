### Rainbow sort 

{1, 0, 1, -1, 0} is sorted to {-1, 0, 0, 1, 1}



三个挡板4个区域

 -1 -1 ... -1 1 1 ... 1 x x x... x x 0 0 .. 0
              i         j --->     k

[0, i) -1
[i, j)  1
[j, k]  未知， 移动 j 直到 jk交错
(k, end]  0


```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swapInPlace = function(nums, i, j){
    [nums[i], nums[j]] =  [nums[j], nums[i]];
}

const rainbowSort = function(nums) {

    if(nums === null || nums.length === 0) {
        return nums;
    }

    // 初始挡板位置，让j移动
    // i j 挡板放最前面， k挡板放在最后 满足每个物理意义，挡板之间都没有东西， 整个array都在【j, k】之间， 属于未知探索区
    let i = 0, j = 0;
    let k = nums.length - 1;

    while (j <= k) {
        // j 可能的值有三种情况 -1, 1, 0
        if (nums[j] === -1) {
            // -1 -1 ... -1 1 1 ... 1 -1 x x... x x 0 0 .. 0
            //              i          j --->     k
            swapInPlace(nums, j, i);
            i++;
            j++;
        } else if (nums[j] === 1) {
            // -1 -1 ... -1 1 1 ... 1 1 x x... x x 0 0 .. 0
            //              i         j --->     k
            j++;
        } else if (nums[j] === 0) {
            // -1 -1 ... -1 1 1 ... 1 0 x x... x x 0 0 .. 0
            //              i         j --->     k
            swapInPlace(nums, j, k);
            k--;
        }

    }

    return nums;
};



const nums = [1,1,0,-1,0,1,-1];
console.log(rainbowSort(nums));

```