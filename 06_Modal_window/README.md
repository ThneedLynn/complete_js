# Modal window

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