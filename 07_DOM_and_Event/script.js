'use strict';

// 定义一个 1-20 之间的数
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
//document.querySelector('.number').textContent = secretNumber;

// 定义分数
let score = 20;
document.querySelector('.score').textContent = score;

// 定义最高分记录
let highScore = 0;

// addEventListener(type, listener, options);
document.querySelector('.check').addEventListener('click', function(){
    const guessString = document.querySelector('.guess').value;

    console.log('The input value is', guessString, typeof guessString);

    const guessNum = Number(guessString);

    console.log('The input value is', guessNum, typeof guessNum);

    if (!guessNum) {
        document.querySelector('p.message').textContent = 'No number!'
    
        //1.  when win the games!
    } else if (guessNum === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('p.message').textContent = 'Correct number!'

        // 改变body的背景颜色
        document.querySelector('body').style.backgroundColor = '#60b347';
        // 增加div的宽度
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // 2. when guess too high!
    } else if (guessNum > secretNumber) {
        if (score > 0) {
            document.querySelector('p.message').textContent = 'Guess too high!'
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('p.message').textContent = 'Lose the game! '
        }
        // 3. when guess too low!
    } else if (guessNum < secretNumber) {
        if (score > 0) {
            document.querySelector('p.message').textContent = 'Guess too low!'
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('p.message').textContent = 'Lose the game! '
        }
    }
});

// 点击重置游戏
document.querySelector('.again').addEventListener('click', function(){

    // 1. 重置 score 和 secret number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    // 2. 重置 message, score value 和 guess input field ‘’
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('input').value = '';
    // 3. 重置 background color 和 number width 和 显示的数字
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});