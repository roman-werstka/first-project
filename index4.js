const isRain = true;

isRain ? console.log("Идёт дождь") : console.log("Дождя нет");

let minPrice = 200;
let maxPrice = 1000;
let price = 600;

if (price > maxPrice) {
    console.log("Цена слишком большая")
} else if (price < minPrice) {
    console.log("Цена слишком маленькая")
} else {
    console.log("Цена нормальная")
}

let cash = 5;

switch (cash) {
    case 1:
        console.log("Свободная касса №" + cash)
        break;
    case 2:
        console.log("Свободная касса №" + cash)
        break;
    case 3:
        console.log("Свободная касса №" + cash)
        break;
    case 4:
        console.log("Свободная касса №" + cash)
        break;    
    default:
        console.log("Все кассы заняты")
        break;
}