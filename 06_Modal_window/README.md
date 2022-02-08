# Modal window

<img width="1158" alt="Screen Shot 2022-02-07 at 10 57 41 PM" src="https://user-images.githubusercontent.com/42024653/152934546-9e7fdb66-3d7b-4636-8bbd-f780b9c0869a.png">


<img width="1162" alt="Screen Shot 2022-02-07 at 10 57 49 PM" src="https://user-images.githubusercontent.com/42024653/152934627-df963775-468d-42b1-9928-79caab4dfe06.png">


### querySelectorAll
```js
const btnsOpenModal = document.querySelectorAll('.show-modal');
// 返回一个NodeList: [类似Array但不是Array]
```
- 遍历NodeList

``` js
for(let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i]); // 获得每一个node
    console.log(btnsOpenModal[i].textContent);
}
// <button class="show-modal">Show modal 1</button>
// <button class="show-modal">Show modal 2</button>
// <button class="show-modal">Show modal 3</button>

```

- 操作classList

classList 有add，remove， replace, toggle. 直接用string of classname
```js
modal.classList.remove('hidden');
// OR
modal.style.display = 'block';
```

- why not 操作style
```js
modal.style.display = 'block';
```
因为通常会有很多style attributes，我们可以把它们都定义在一个classname下面，然后直接控制classname，这样比较方便。

### Listen to keyboard event
Keyboard events are global events. 全局事件一般在整个app listen.

- keydown
- keyup
- keypress


```js
// listen to global keyboard events
document.addEventListener('keydown', function(event){
    console.log("A key was pressed", event);

    if(event.key === 'Escape') {
        // only close the modal when the model is visible (does not contain the class hidden)
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});
```

