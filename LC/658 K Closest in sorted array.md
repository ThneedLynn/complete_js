### K Closest In Sorted Array

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

- |a - x| < |b - x|, or
- |a - x| == |b - x| and a < b


#### Assumptions
- 1 <= k <= arr.length
- arr is sorted in ascending order

#### Examples
- Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]



```js
// 先使用二分法找到cloest element index
// 再从cloest 向两边谁小移谁     xxxxxxx..[array left]...xxx T xxxx...[array.right]...xxxxxx
// 注意corner case：比如一边已经没有可以移动的位置了，只需要移动另一边
var findClosestElements = function(arr, k, x) {
    
    const closetEleIndex = findClosets(arr, x);
    
    const [leftBound, rightBound] = findKNearby(arr, k-1, x, closetEleIndex);
    
    return [...arr].slice(leftBound + 1, rightBound);
    
    
};

// left right 之间 不包括left和right 是 k nearby
const findKNearby= function(arr, k, x, index) {
        
    let left = index - 1;
    let right = index + 1;
    
    while (k > 0) {
        
        // pick left one when: 1. left 和 target 更接近 
        //                     2. left right 和 target 一样接近但是left 更小
        //                     3. right 已经没有可以pick的了
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x) || right === arr.length) {
            left--;
            k--;
            continue;
        }
        
        // pick right one when: 1. right 和 target 更接近 
        //                      3. left 已经没有可以pick的了
        if (Math.abs(arr[right] - x) < Math.abs(arr[left] - x) || left < 0) {
            right++;
            k--;
            continue;
        }    
    }
    
    return [left, right];
    
}


const findClosets = function(arr, target) {
    // 前提: 一定能找到
    
    let left = 0;
    let right = arr.length - 1;
    
    // 停止条件：left，right 相邻 OR left，right 为同一个
    while (left < right - 1) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (arr[mid] === target){
            return mid;
        } else if (arr[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    // post-processing: 比较左右两边哪个更贴近target
    if (Math.abs(arr[left] - target) <= Math.abs(arr[right] - target)) {
        return left;
    } else {
        return right;
    }
    
    return -1;
}
```