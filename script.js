'use strict';

function startGame() {

    const userNumber = prompt('Угадай число от 1 до 100');

    if (userNumber != null) {

        if (!isNumber(userNumber)) {
            alert('Введи число!');
            startGame();
        } else {
            initBot();
        }

    } else {
        alert('Игра окончена');
    }

    function initBot() {

        if (userNumber > botNumber || userNumber < botNumber) {
            alert('Не угадали. Загадайте число ещё раз!');
            startGame();
        } else {
            alert('Поздравляю, Вы угадали!!!');
        }

    }

}

const randomNumber = function () {
    return Math.floor(Math.random() * 100) + 1;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && (String(num) === String(num).trim());
}

const botNumber = randomNumber();

startGame();