### Transforming objects
Objects lack many methods that exist for arrays, e.g. map, filter and others.

If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map, to transform these key/value pairs.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.
For example, we have an object with prices, and would like to double them:

```js
let prices = {
  banan: 1,
  orange: 2,
  meat: 4
}
// Object.fromEntries([[true, 1], [11,2]]); // {11: 2, true: 1}

let doublePrices = Object.fromEntries(
    Object.entries(prices) // [['banan', 1], ['orange', 2], ['meat', 4]]
          .map(entry => [entry[0], entry[1] * 2]) // [['banan', 2], ['orange', 4], ['meat', 8]]
); // {banan: 2, orange: 4, meat: 8}

```

#### 练习 sum salaries
```js
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries){
  let sum = 0;
  for(let num of Object.values(salaries)) {
    sum += +num;
  }

  return sum;
}

console.log(sumSalaries(salaries));

```