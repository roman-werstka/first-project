function greeting(age) {
    if (age >= 18) {
        alert("Добро пожаловать на наш взрослый сайт!");
    } else {
        alert("Извините, доступ только для совершеннолетних");
    };
};

function processUserInput(callback) {
    const age = prompt("Пожалуйста, введите ваш возраст");
    callback(age);
};

processUserInput(greeting);

const btnEl = document.querySelector(".myButton");
const descrEl = document.querySelector(".counter");
let number = 0;

btnEl.onclick = function () {
    number++;
    descrEl.textContent = `Счётчик: ${number}`;
};