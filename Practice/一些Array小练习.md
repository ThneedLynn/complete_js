### 一些Array 小练习


#### Copy and sort array in place
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

```js 
// sort 会modify original array
// 可以用slice（）to make a copy
function copySorted(arr){
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
```
#### Extendable calculator
1. First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
```js
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
```
2. Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
For instance, let’s add the multiplication *, division / and power **:
```js
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
```

```js

function Calculator(){

  this.name = "Lu";

  //用一个object 来存已知的方法
  this.methods = {
    "+": (a,b) => {
      console.log("@@ 2", this); // 该Calculator 实例 

      return a+b;
    },
    "-": function(a,b) {

      console.log("@@ 3", this); // 该methods{+, 1}
      return a-b;
    }
  }

  
  
  this.calculate = function(str){
    const numberArr = str.split(' ');
    
    console.log("@@ 1", this); // 该Calculator 实例
    console.log(numberArr);
    // 记得转换成number

    const a = +numberArr[0];
    const sign = numberArr[1];
    const b = +numberArr[2];

    return this.methods[sign](a, b)

  }

  this.addMethod = function(name, func){
     this.methods[name] = func;
     console.log("@@ 4", this);
  }
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("5 - 4"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);
```

#### Sort users by age
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

```js
function sortByAge(arr){
  return arr.sort((a, b) => {
    return a.age - b.age;
  });
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr);// now: [john, mary, pete] 从小到大
```

