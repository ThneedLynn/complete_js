### Shuffle an array
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

```js
let arr = [1, 2, 3];
shuffle(arr);
// arr = [3, 2, 1]
shuffle(arr);
// arr = [2, 1, 3]
shuffle(arr);
// arr = [3, 1, 2]
```

错误答案：

```js 
function shuffle(arr) {
  arr.sort(() =>{
    // sort 要记得return哦！！
    return Math.random() - 0.5;
  })
}

// 验证
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
} 

for(let i=0; i<100_0000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

console.log(count);
// 会发现123比其他多很多 

```
Why it doesn’t work? Generally speaking, sort is a “black box”: we throw an array and a comparison function into it and expect the array to be sorted. But due to the utter randomness of the comparison the black box goes mad, and how exactly it goes mad depends on the concrete implementation that differs between engines.


正确答案：（ Fisher-Yates shuffle ）

从后往前在i元素上让i和[0,i]任意元素swap

```js
function shuffle(arr){
  // 从后往前遍历array
  for(let i = arr.length-1; i >= 0; i--) {
    // 当前元素i
    // 从[0, i]中随机挑选一个元素j
    let j = Math.floor(Math.random() * (i + 1)); 

    // 将 i 和 j swap
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // 这里用了deconstructing 方法swap：
    // 右边： 新建一个array [], 放入arr[j], arr[i] --> [arr[j], arr[i]]
    // 左边： 用变量 arr[i] 和 arr[i] 分别去接新array index 0， index 1的值
  }
}

```


```js
// array func
// forEach((element, index, array) => { /* ... */ })

// call back func
// forEach(callbackFn, thisArg)

// inline call back func
// forEach(function(element, index, array) { /* ... */ }, thisArg)

function groupById(users) {
 return users.reduce((res, item) => {
   res[item.id] = item;
   return res;
 }, {})
}

```



