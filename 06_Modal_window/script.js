'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
// 返回一个NodeList: [类似Array但不是Array]

const openModal = function(){
    // classList 有add，remove， replace， toggle api
    // 这里把hidden class 移除就会使modal 和 overlay 展示出来
    // 类似 modal.style.display = 'block';
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i]);
    console.log(btnsOpenModal[i].textContent);

    btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function(){
    // 给modal div 加上 hidden classname，就能把modal隐藏起来
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};

// close modal by clicking X button
btnCloseModal.addEventListener('click', closeModal );

// close modal by clicking the overlay
overlay.addEventListener('click', closeModal );

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