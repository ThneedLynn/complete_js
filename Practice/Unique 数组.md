### Filter unique array members

```js
function unique(arr) {
  const set = new Set(arr);

  return Array.from(set)

  // const result = [];

  // for(let value of set) {
  //   result.push(value);
  // }

  // return result;

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

```