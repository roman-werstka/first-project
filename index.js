let currentYear = 2026;

let studentName = prompt("Введите имя");
let year = prompt("Введите год рождения");
let height = prompt("Введите рост");
let weight = prompt("Введите вес");

let age = currentYear - year;
let IMT = weight / (height * height);

console.log(studentName, "возраст:", age, "рост:", height, "вес:", weight, "IMG", IMT);