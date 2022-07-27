### Search a 2D sorted matrix 
原则
1. We must gaurantee that the search space that (possibly contains the target to find) decrease over time (after each iteration).所以一般都是有一定逻辑sort过的
2. We must ganrantee that the target if(exits) cannot be ruled out.保证每次抛弃的部分不可能有target


### Note 
1. 虽然是个二维的，但是横向纵向都sort过了，所以可以把他们扁平化成一个sorted []
2. 所以可以按照经典binary search 的方法，将一位数组的index map 到二维数组坐标
3. `row = Math.floor(index / cols);`  `col = index % cols;`

```js

[[1,  3,  5,  7 ],
 [10, 11, 16, 20],
 [23, 30, 34, 60]]


[1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60]

```

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// sorted 2D array, we can flatten it and use binary search
// use a map function to map the 2D position vs index
// 1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60
var searchMatrix = function(matrix, target) {
    
    // corner case: invalid matrix
    if ( matrix === null || matrix.length === 0 || matrix[0].length === 0 ) {
        return false;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let left = 0;
    let right = rows * cols - 1;
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        const [row, col] = indexMap(mid, cols, rows);
        
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        
    }
    
    return false;
    
};

var indexMap = function(index, cols, rows){
    let row = Math.floor(index / cols);
    let col = index % cols;
    
    return [row, col];
}
```
