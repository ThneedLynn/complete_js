### Filter unique array members
Anagrams are words that have the same number of same letters, but in different order.

```js
nap - pan
ear - are - era
cheaters - hectares - teachers
```
Write a function aclean(arr) that returns an array cleaned from anagrams.

```js
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
```


#### Anagram: split every word and sort --> all anagrams are same.

```js
// To find all anagrams, let’s split every word to letters and sort them. When letter-sorted, all anagrams are same.
nap, pan -> anp
ear, era, are -> aer
cheaters, hectares, teachers -> aceehrst
```

```js
'use strict';

function aclean(arr) {
  // use a map to store the anagram root: anp --> nap/pan
  let map = new Map();

  // use for...of to iterate the array 
  for (let str of arr) {
    let sortedA =  str.toLowerCase() // 'PAN' -> 'pan'
                      .split('') // 'pan' -> ['p', 'a', 'n']
                      .sort() // ['p', 'a', 'n'] -> ['a', 'n', 'p']
                      .join(''); // ['a', 'n', 'p'] -> 'anp'

    // 因为我们只要每种留一个 overwrite is okay
    map.set(sortedA, str);  // {'anp'=> PAN, }

    // 或者这里直接用 plain object 存也可以
    // object[sortedA] = str;
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );

```

