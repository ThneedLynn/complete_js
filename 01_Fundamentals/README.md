# JS Fundamentals Part 1

### What is JS
Javascript is a programming language.
- high-level
- object-oriented
- multi-paradigm

Programming language: instruct computer to do things

High-level language: we don't need to worry about complex things, e.g. memory management 

Object-oriented: based on object for storing most kinds of data

Multi-paradigm: we can use different styles of programming

### What is role of JS in web development
JS是用来干什么的

**JS**(v. programming language: allow interation/ build web app) + **HTML**(n. content) + **CSS**(adj. presentation) 组成网页
![html_css_js](https://github.com/ThneedLynn/complete_js/blob/master/img/html.png)

### JS almost can do anything
Dynamic effects and web applications in the browser

Modern JS libraries and frameworks: React, Angular, Vue

### JS 作用在不同领域

- Back-end application: JS can be used outside a browser: JS can run on a web server, using Node.js (interact with database)

- Front-end application: JS can be used in the browser

- Native mobile application: React Native

- Native desktop application

### JS Releases/ Versions

- ES: ECMAScript
- ES6 是对js有重大更新的
- ... --> ES5 --> ES6 (2015) --> ... --> ES11 (2020)


### Browser console

Just an environment built to execute small pieces of code, and show result immediately.

### Inline JS vs External JS
- Easy to separate the content with JS

### 变量命名规则

- can only contain letter/number/_/$
- cannot start with number: X 2row
- cannot start with a Uppercase (规定/convention): X Father
- cannot use a reserved word: X function
- constant: all uppercase letters

### Data types (两大类：对象/非对象 7种)
- Object 
```js
let me = {name: "Lu"}
```
- Primitive 

```js
let firstName = 'Lu';
let age = 3;
```

1. Number
Floating point numbers: used for decimals and integers `let age=23.0;`

2. String
Sequency of characters `let name='LU';`

3. Boolean
Logical type that can only be true of false `let fullAge=true;`

4. Undefined
Value taken by a variable that is not defined: empty value `let name;`

5. Null
Also means 'empty value'

6. Symbol(ES2015)
Value that is unique and cannot be changed

7. BigInt(ES2020)
Larger integers than the Number type can hold


==JS has dynamic typing: We do not have to manually define the data type of the value stored in a variable. (不用声明变量类型)==

```
variable don't have a type. 
variable store a value.
value has a type.
```

## 一些例子

```js
let year;
console.log(year); --> 'undefined'
console.log(typeof year); --> 'undefined'

console.log(typeof undefined); --> 'undefined'

console.log(typeof null); --> 'object' !!!实际是个bug

```

### let, const, var 

- let:==[block scope]== will ==mutate/reassign== value later
- const: immutable variable / should not to change / must be inited `X const b;`

- var: ==[function scope]==
- 不declare variable 的缺点: `X last='119'` 不会在scope create variable



### Operator 
- 作用： transfer value / combine values
- 分类： 

1. mathematical operator
```js
const ageJone = 2037 - 1991;
ageJone * 2;

ageJone / 10; // floating number

2 ** 3; // 2的3次方 2 to the power of 3

// + 可以合并string
const first = "Jonas";
const lastName = "Schme"
console.log(first+lastName); // JonasSchme
```

2. typeof operator

```js

console.log(typeof null); // 'obj' 
```


3. assignment operator

```js
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101;
```

4. comparison operator
```js
 > 
 <
 >=
 <=
```
### Operator Precedence

See MDN table 

### Strings and Template Literals

1. 单行string
 ```js
 const john = "I'm " + firstName + ', a' + (year - birthYear) + 'years old';

// ${里面可以写任何js expression}
 const john = `I'm ${firstName}, a ${year - birthYear} years old`;
 ```

 2. 多行string
 ```js
 const john = "String with \n\ multiple \n\ lines";

// 这里直接在backticks里换行就行
 const john = `String with
 multiple
 lines`;
 ```
### Type conversion & Type coercion 
1. Conversion: 手动转换


```js
const inputYear = '1991';
console.log(inputYear + 18); // '199118'
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Jonas')); // NaN
typeof NaN; // 'number' 实际上就是一个invalid number
```

2. Coercion: 由JS自动转换，将一种类型自动转换成另一种类型
除了加号，JS一般会把数字相关的转换成数字
```js
console.log('I am' + 18 + 'years old');
console.log('23' + '10' + 3); // '23103'
console.log('23' - '10' - 3); // 10
console.log('23' / '2'); // 11.5
console.log('23' > '2'); // true

```

###  Truthy & Falsy value
1. 5 falsy values: 0, '', undefined, null, NaN (当然 false 本身也是 false)

2. 其他都是truthy

 
###  Equality Operators == vs ===
1. === strict equality operator, does not perform type coercion 

2. == loose equality operator, perform type coercion

```js
'18' == 18; // true

const promptValue = prompt("What is your favourite number"); // 将prompt 返回的值存住 (是个string)
```

###  The switch statement 
作用域的问题: This example will output the error ```Uncaught SyntaxError: Identifier 'message' has already been declared``` 
```js
const action = 'say_hello';
switch (action) { // 作用域开始
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}// 作用域结束

```
原因： Ultimately, this is due to both let statements being interpreted as duplicate declarations of the same variable name within the same block scope.

修改方法： 
```js
const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}

```
###  Statement and Expressions

Expression(e.g. 词组): piece of code that produces a value
Statement(e.g. 句子): code that executed but did not produce value by itself

```js
// statement: 
if (23 > 10) {
    const str = '23 is bigger';
}
```

### The conditional(Ternary) statement
```js
// 不能取代if else， 方便make quick decision
age >= 18 ? 'Wine' : 'No wine';
```

### JS Releases: ES5, ES6, ESNext
![js_history](https://github.com/ThneedLynn/complete_js/blob/master/img/js_history.png)

##### Backwards compatibility: don't break the web!
(将过去的code在现在的browser 上跑)
1. Old features are never removed
2. Not really new versions, just **incremental updates**(releases)
3. Website keep working forever! 

##### Forwards compatibility: doesn't work!
(将现在的code在过去的browser上跑)

##### How to use modern JS today ?
- Development 
在开发的过程中，use latest chrome
- Prodution
==Use Babel to transpile and polyfill the code (converting back to ES5 to ensure browser compatibility for all users)==

ES5: fully supported in all browsers (IE 9+). Safe to use today. 
ES6+: well supported in all modern browsers. Can use most features in production with transpiling and polyfilling.

