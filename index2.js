const Password = "qwerty";
const confirmPassword = prompt("Введите пароль");

if (confirmPassword === savePassword) {
    console.log("Пароли совпадают")
} else {
    console.log("Пароли не совпадают")
};