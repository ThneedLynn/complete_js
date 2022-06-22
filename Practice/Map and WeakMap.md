### Map

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

#### Method

- Map[Symbol.iterator]
- new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
- map.set(key, value) – stores the value by the key.
- map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
- map.has(key) – returns true if the key exists, false otherwise.
- map.delete(key) – removes the value by the key.
- map.clear() – removes everything from the map.
- map.size – returns the current element count.
- map.entries() - returns a new iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.  In this particular case, this iterator object is also an iterable, so the for-of loop can be used.
- map.forEach() - executes a provided function once per each key/value pair in the Map object, in insertion order.

```js
let map = new Map();
map.set('1', 'str1'); // string key
map.set(1, 'num1'); // number key
map.set(true, 'boola'); // boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
```

#### map[key] isn’t the right way to use a Map
Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).
So we should use map methods: set, get and so on.

#### Map 也能接受object 作为key 

```js 
let john = {"name": "John"};
let visitsCountMap = new Map();

visitsCountMap.set(john, 10);
visitsCountMap.get(john);

```
#### How Map compares keys
To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

#### Chaining
Every map.set call returns the map itself, so we can “chain” the calls:
```js
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

#### Iteration over Map
- map.keys() – returns an iterable for keys,
- map.values() – returns an iterable for values,
- map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

```js
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}
```

#### The insertion order is used
The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

#### Map have built-in forEach method, similar to Array

```js
// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
  .forEach(logMapElements);

// expected output: "m[foo] = 3"
// expected output: "m[bar] = [object Object]"
// expected output: "m[baz] = undefined"
```

#### Map from Object: Object.entries
When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

```js 
// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
```
If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

So we can create a map from an object like this:

```js
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj)); //[ ["name","John"], ["age", 30] ]

alert( map.get('name') ); // John

```

#### Object from Map: 

```js

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
```

```js
let obj = Object.fromEntries(map); // omit .entries()
```
That’s the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map.


### WeakMap

The first difference between Map and WeakMap is that ==keys must be objects==, not primitive values:

```js
let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)
// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object

```

If we use an object as the key in it, and there are no other references to that object – it will ==be removed from memory (and from the map) automatically==.

```js
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference
// john is removed from memory!
weakMap.get(john); //undefined

```

Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

WeakMap ==does not support iteration and methods keys(), values(), entries()==, so there’s no way to get all keys or values from it.
#### Why??  
If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically. But technically it’s not ==exactly specified when the cleanup happens==. The engine may have cleaned it up or not, or did it partially. For that reason, methods that access all keys/values are not supported.


WeakMap has only the following methods:

- weakMap.get(key)
- weakMap.set(key, value)
- weakMap.delete(key)
- weakMap.has(key)

#### Why we need WeakMap: 1. an additional data storage
e.g. If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

```js
weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically
```

#### Why we need WeakMap: 2. caching
We can store (“cache”) results from a function, so that future calls on the same object can reuse it.

用map 的话：
```js
// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let obj = {/* let's say we have an object */};

let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)
```

用weak map 的话:
```js
// 📁 cache.js
let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* some object */};

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well
```

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.