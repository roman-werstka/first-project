// Шаг 1. Создаём переменные.
const isSunny = true;
const temperature = 25;
const hasUmbrella = false; // Допустим, у нас нет зонта.

// Шаг 2. Проверяем условия для пикника.
let canHavePicnic = (isSunny && temperature >= 20 && temperature <= 30) || (!isSunny && temperature < 15 && hasUmbrella);

// Шаг 3. Выводим результат в консоль.
console.log("Можно ли устроить пикник:", canHavePicnic);