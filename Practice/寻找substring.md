### search substring


解法一：用string.indexOf() 
```js 
// input:  'As sly as a fox, as strong as an ox';
// target: 'as'
const printAllSubStringIndex = (str, target) => {
   let startIndex = 0;

    while(true) {
        let foundPosition = str.indexOf(target, startIndex);
        if(foundPosition === -1) break;

        //Found one! continue to next 
        console.log("Found at ", foundPosition);
        startIndex = foundPosition + 1;
    } 
}
```

简短版
```js 
let pos = -1;
while(（pos = str.indexOf(target, pos+1)） != -1){
    console.log(pos);
}
```