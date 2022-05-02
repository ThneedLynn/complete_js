### 自己写个Symbol.iterator

#### Iterable 
- Objects that can be used in for..of are called iterable.


#### Make an object iterable
we have an object that is not an array, but looks suitable for for..of.

```js
let range = {
  from: 1,
  to: 5
};

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5
```

To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

1. When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method `next`.
2. Onward, for..of works only with that returned object.
3. When for..of wants the next value, it calls next() on that object.
4. The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

```js
let range = {
  from:1,
  to:5
};

range[Symbol.iterator] = function(){
  // it return the iterator object:
  // for...of works only with the iterator blow, asking it for the next value
  console.log("range this: ", this);
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next(){
       console.log("next this: ", this);
      // 4. it should return the value as an object {done:.., value :...}
      if(this.current <= this.last) {
        return({
          done: false,
          value: this.current++
        });
      } else {
        return {done: true};
      }
    }
  }

}

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

```

或者可以写的更简单一些
Please note the core feature of iterables: separation of concerns.

- The range itself does not have the next() method.
- Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](), and its next() generates values for the iteration.
So, the iterator object is separate from the object it iterates over.

Technically, we may merge them and use range itself as the iterator to make the code simpler.

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

```

#### 练习： make a number iterable 
```js
for(let num of 12345) {
  console.log(num); // 5,4,3,2,1
}
Number.prototype[Symbol.iterator] = function () {
        let current = this
        return {
            next: () => {
                if (current) {
                    let value = current % 10
                    current = parseInt(current / 10)
                    return {value, done: false}
                } else {
                    return {done: true}
                }
            }
        }
    }


```


#### Array 和 String 有build-in iterable
```js 
for (let char of "test") {
  console.log(char); // t, e, s, t
}
// OR calling the iterator explicitly 

let str = "test";
let iterator = str[Symbol.iterator](); //记住一开始call一次这个function 会return 一个带next 的object

while(true) {
  let result = iterator.next(); //每次call next function
  if (result.done) {
    break; //最后一个element， next只return {done: true}
  }

  console.log(result.value); // next return {done: false, value: xxx}
}


```

#### 区分 Iterables 和 array-like
- iterable: object that implement the Symbol.iterator, can be used in for..of
- array-like: object have indexes and `length`, look like array, but lack the built-in methods of arrays.
e.g. String 同时是 iterable 且 array-like， 有numeric index 和 length
e.g. array-like 但是不是iterable 

```js 
let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};
```

### Array.from - 想将一个object变成Array，就可以时候pop，push 等array 特有的method
It takes an ==iterable or array-like== object and makes a “real” Array from it. Then we can call array methods on it.
```js
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*) takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it.
alert(arr.pop()); // World (method works)

let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (array toString conversion works)
```

```js


```