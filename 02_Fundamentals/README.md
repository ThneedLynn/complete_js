# JS Fundamentals Part 2

### Activating Strict Mode
- A special mode that can be activated in JS, to ensure writing in secure code.
1. for entire scripts
```js
//之前不能有任何code，否则开启失败
//comment 可以有， comment会被js忽略
'use strict';
```
2. for a function
```js
function strict() {
  // Function-level strict mode syntax
  'use strict';
  function nested() { return 'And so am I!'; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }
```
3. for modules and classes: strict by default!
```js
function strict() {
    // because this is a module, I'm strict by default
}
export default strict;
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

- Non-strict mode referred to as "sloppy mode".

### Functions
- 定义: chunk of code can be reused
```js
function fruitProcessor(apples, oranges){
    //函数的parameters会在函数被call时定义
}
```

### Function declarations vs expressions

```js
// function declaration
function calcAge1(birthYear){
    return 2020 - birthYear;
}

const age1 = calcAge1(1991);
```
通过表达式将函数保存在一个变量里
```js
// function expression/anonymous function 匿名函数
const calcAge2 = function(birthYear){
    return 2020 - birthYear;
}
const age2 = calcAge2(1991);
```

==那他们有什么不同呢？ 因为hoisting==
可以在define前call
```js
// function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear){
    return 2020 - birthYear;
}
```
不可以在define前使用
```js
// function expression/anonymous function 匿名函数
//！！！！！ 不可以
const age2 = calcAge2(1991);
const calcAge2 = function(birthYear){
    return 2020 - birthYear;
}
```
### Arrow function
A special form of function expression that is shorter 

```js
// explicitly return
const calAge = birthYear => 2037 - birthday;
```
- arrow function 和传统function的不同
==arrow function does not get a so-called "this" keyword==

![different_function_formats](https://github.com/ThneedLynn/complete_js/blob/master/img/different_function_formats.png)


### Array 有序
```js
// literal syntax
const friends = ['mike', 'steve', 'peter'];
// new
const years = new Array(1991, 1984, 2008, 200);

// array is 0 based
console.log(friends[0]);

// length of array
friends.length;

// change of array
friends[4] = 'me'; //['mike', 'steve', 'peter', undefined, 'me']

// expressions/variables in array
const jone = ['John', 2021-1995, friends];
```


### Basic Array method
```js
const friends = ['m', 's', 'p'];

// 从尾添加 --> 返回新长度
const newLength = friends.push('Jay'); // ['m', 's', 'p', 'Jay']

// 从头添加 --> 返回新长度
const newLength = friends.unshift('John'); // ['John', 'm', 's', 'p', 'Jay']

// 从尾移除元素 --> 返回被移除的元素
const popped = friends.pop();// ['John', 'm', 's', 'p']

// 从头移除元素 --> 返回被移除的元素
const popped = friends.shift();// ['m', 's', 'p']

// 查找元素的位置 (strict equality, no type coeraion) --> 返回元素的index / -1
friends.indexOf('m'); // --> 0

// ES6 元素是否存在 --> true / false
friends.includes('m'); // --> true
```



### Object 无序

key - value pair: 相比于array 用index refer element， 在object 就可以用key 来refer element
```js
const obj = {
    firstName: 'lu',
    lastName: 'luu',
    jobs: [1,2,3]
}
```

### Dot vs Bracket Notation 
Bracket notation 可以用变量去访问某一个key
```js
obj.lastName;
obj['lastName'];
obj[这里可以放变量和表达式]；
const nameKey = 'name';
obj['first' + nameKey];
```

### Object methods
```js
const jonas = {
    firstName: 'John',
    lastName: 'Schm',
    birthYear: 1991,
    job: 'teacher',
    friends: ['m', 'b', 'e'],
    // function attach to object --> method
    calAge: function(birthYear){
        return 2037 - birthYear;
    }
}

jonas.calAge(1991);
jonas['calAge'](1991);
```

- Using "this"
==The this variable is basically equal to the object on which the method is called (equal to the object calling the method).==

```js
const jonas = {
    birthYear: 1991,
    calAge: function(){
        console.log("what is this", this);
        return 2037 - this.birthYear;
    }
}



// 其实不用this也行，但是违背了DRY 原则， 若之后想改obj name，则需要再改method里的obj 名字才能work
const jonas = {
    birthYear: 1991,
    calAge: function(){
        console.log("what is this", this); 
        return 2037 - jonas.birthYear;
    }
}
jonas.calAge();// this: jonas obj

// arrow function 没有自己的this
const jonas = {
    birthYear: 1991,
    calAge: () => {
        console.log("what is this", this);
        return 2037 - jonas.birthYear;
    }
}
jonas.calAge();// this:  Windows / jonas 所在context obj

```

- Store the calculated value inside the object
这样如果我们这个age一直要用的话，就不用每次都调用函数来计算它
```js
const jonas = {
    firstName: 'John',
    birthYear: 1991,
    calAge: function(){
        console.log("what is this", this.age);
        // 创建一个新的property，并赋值
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calAge()}-year old people.`
    }
}
jonas.calAge();
```

### for Loop
```js
// keeps running while condition is true
for(let rep = 1; rep <= 10; rep++ ) {
    console.log('Now rep is ', rep);
    // continue; will skip this round
}

```

### Loop backward

```js
const jonas = ['John', 'Sdd', 2037-1991, 'teacher', ['M', 'P', 'S']];

for(let i = jonas.length -1; i >= 0; i--) {
    console.log(jonas[i]);
}
```

### while Loop
```js
let rep = 1;
while(rep <= 10) {
    console.log(`Lifting #${rep}`); 
}
```