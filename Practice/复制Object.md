### 复制Object 

### 方法一： for in loop 复制 
```js
let user = {
    name: 'John',
    age: 30
};

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

console.log(clone);
```

### 方法二： Object assign 复制
仅能复制  enumerable own properties。不能复制继承来的properties, 也不能deep clone
```js
// Object.assign(target, source1, source2, ...);
const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const modified = Object.assign(target, source);
console.log(target); // {a: 1, b: 4, c: 5}
console.log(modified); // {a: 1, b: 4, c: 5}
```

### 方法三： spread syntax 复制
```js
const source = {b: 4, c: 5};

const clone = {...source};
```

### Nested Cloning
在一个object 中, propery 也能是其他object 的reference

```js
let user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
}

```

现在仅仅copy

```js
clone.sizes = user.sizes
```
是不够的的。因为user.sizes是一个object，这样会copy by reference。

```js
let clone = Object.assign({}, user);

user.sizes == clone.sizes; // true. Same reference

user.sizes.width++;
// 此时会发现clone.sizes.width 也变了
```



### Nested Cloning：recursion 
```js
function deepClone(source) {
    const clone = {};

    for (let key in source) {
        if(typeof source[key] == 'object') {
            clone[key] = deepClone(source[key]);
        } else {
            clone[key] = source[key];
        }
    }

    return clone;
}

```