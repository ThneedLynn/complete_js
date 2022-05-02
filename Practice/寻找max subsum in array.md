### 寻找max subsum in array
```js
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5, index 1-2
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11, index 4-4
console.log(getMaxSubSum([-2, -1, 1, 2]));// 3, index 2-3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100, index 0-0 
console.log(getMaxSubSum([1, 2, 3])); // 6, index 0-2
console.log(getMaxSubSum([-1, -2, -3])); // -1, index 0-0
console.log(getMaxSubSum([-1, 1, -1, 1])); // 1, index 1-1 or 3-3
console.log(getMaxSubSum([1])); // 1, index 0-0
console.log(getMaxSubSum([-1, 2, 3, -9, 2, 10])); //12, index 4-5
```



#### Solution 1: O(n^2) * O(n)
```js

function getSubSum(input, leftIndex, rightIndex) {
    let sum = 0;

    for (let i = leftIndex; i <= rightIndex; i++) {
        sum += input[i];
    }

    return sum;
}

function getMaxSubSum(input) {
    let result = {
        globalMaxSum: -Infinity,
        leftIndex: 0,
        rightIndex: 0
    };

    // corner case 1: if input is empty
    if(input.length === 0) return result;

    // corner case 2: if input has only one element
    if(input.length === 1) {
        result.globalMaxSum = input[0];
        return result;
    }

    // input array length > 1
    for(let i = 0; i < input.length; i++) {
        // try out all subarrays, get their sum
        for(let j = i; j < input.length; j++) {
            const currentSum = getSubSum(input, i, j);
            // if the current sum > global sum, update the result
            if (currentSum > result.globalMaxSum) {
                result.globalMaxSum = currentSum;
                result.leftIndex = i;
                result.rightIndex = j;
            }
        }
    }

    return result; 
}


```

#### Solution 2: O(n^2) + O(n)
改进计算subsum的方法，用一个presum array来记录到index 为止的elements 的和。
[ele1, ele2, ele3]
preSum = [ele1, ele1+ele2, ele1+ele2+ele3]

```js
// 只需要遍历array一遍，算出preSum array，就可以用作差法O(1)计算出任意两index之间的subsum
function getSubSum(input, leftIndex, rightIndex) {
    let preSum = 0;
    let preSumArray = [];

    for (let i = 0; i <= input.length; i++) {
        preSum += input[i];
        preSumArray[i] = preSum;
    }

    // corner case: leftIndex = 0
    if(leftIndex === 0) return preSumArray[rightIndex];

    return preSumArray[rightIndex] - preSumArray[leftIndex - 1];

    return sum;
}
```


#### Solution 3: DP O(n) 
```js 
function getMaxSubSum(input) {
     let result = {
        globalMaxSum: -Infinity,
        leftIndex: 0,
        rightIndex: 0
    };

    // coorner case 1:
    if (input.length === 0) return result;
    
    // inital the memory array
    let previousMaxSumArray = new Array(input.length);
    // 用来记录每次在i位置之前的max subsum 的左index
    let localLeftIndex = 0;

    //从第二个元素开始，小一号问题是：以i-1 index结尾的（包含i-1）是到i为止的array的max subsum
    //则在考虑元素是应该加入之前的submax，还是应该另起炉灶（之前的submax < 0）
    for(let i=0; i < input.length; i++) {



        if(i === 0 || previousMaxSumArray[i-1] < 0){
            // 加上之前的还没自己本身大，另起炉灶
            previousMaxSumArray[i] = input[i];
            localLeftIndex = i;
        } else {
            previousMaxSumArray[i] = previousMaxSumArray[i-1] + input[i];
        }

        // 和已有的global max 比较，看是否更新记录
        if (previousMaxSumArray[i] > result.globalMaxSum) {
            result.globalMaxSum = previousMaxSumArray[i];
            // 更新左index
            result.leftIndex = localLeftIndex;
            // 更新右index
            result.rightIndex = i;
        }

    }

    return result;
}
```