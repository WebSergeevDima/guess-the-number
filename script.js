'use strict';

function startGame() {

    const botNumber = randomNumber();

    return function initGane() {

        const userNumber = prompt('Угадай число от 1 до 100');

        if (userNumber != null) {

            if (!isNumber(userNumber)) {

                alert('Введи число!');
                initGane();

            } else {

                if (userNumber > botNumber) {

                    alert('Загаданное число меньше');
                    initGane();

                } else if (userNumber < botNumber) {

                    alert('Загаданное число больше');
                    initGane();

                } else {

                    alert('Поздравляю, Вы угадали!!!');

                }
            }

        } else {

            alert('Игра окончена');

        }
    }

}

const randomNumber = function () {
    return Math.floor(Math.random() * 100) + 1;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && (String(num) === String(num).trim());
}

const start = startGame();

start();