'use strict';

// 用#选择id <p class="score" id="score--1">
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');

// 初始化score，虽然这里我们给了number，js会convert成string
score0Element.textContent = 0;
score1Element.textContent = 0;

// 初始化骰子图片：赋值hidden class
const diceElement = document.querySelector('.dice');
diceElement.classList.add('hidden');

// 选择button
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// 选择current score
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

// 选择player
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// 一些全局变量
let currentScore = 0;
let activePlayer = 0;
const cumScores = [0, 0]
// 是否能继续玩游戏
let playing = true;

const switchPlayer = function(){
    // reset currentScore
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // switch the 'player--active' classname active的player会显示红色
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function(){

    if (playing){
        // 1. generate a random dice roll
        const dice = Math.trunc(Math.random()* 6) + 1;
        // 2. display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;
        // 3. check for rolled 1: if true, switch to next player
        if(dice !== 1){
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch to next player
            switchPlayer();

        }
    }
    
});


btnHold.addEventListener('click', function(){
    if (playing) {
        // 1. add current score to active player's score
        cumScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = cumScores[activePlayer];
        // 2. check if player's score is >=100 --> finish game

        if(cumScores[activePlayer] >= 20) {
            // finish the game: 

            playing = false;

            // 1. add winner class
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

            // 2. remove dice imgage
            diceElement.classList.add('hidden');
        }

        // 3. switch to the next player
        switchPlayer();
    }

});


btnNew.addEventListener('click', function(){
    // 1. reset global variables
    currentScore = 0;
    activePlayer = 0;
    cumScores[0] = 0;
    cumScores[1] = 0;
    playing = true;

    //2. remove dice image
    diceElement.classList.add('hidden');

    //3. reset all display text
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;

    //4.reset css
    // add 不会重复添加
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');


});