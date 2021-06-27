/*
1 выведет 2
2 выведет 1 и 2
3 null так как 1 истина, дальше null станет false и в 2 проверка не передёт
4 1 и undefined
5 Сначала будет "и" дале будем считать или (null||3||4);
*/
/*6*/
/*
let number = promt("Введите число:");

let result = number >= 14 && number <= 90;
if (result == tre) {
    alert("Переменная в диапазоне");
} else {
    alert("Переменная не в диапазоне");
}
--------------------

/*
7
first and third

*/

let Name = prompt("Кто там?");

if (!Name) {
    alert('Отменено');
} else if (Name == 'Админ') {
    pasw = prompt('Введите ваш пароль:');
    if (pasw == 'Я главный') {
        alert("Здравствуйте!");
    } else if (pasw == null) {
        alert('Отменено');
    } else if (pasw) {
        alert('Неверный пароль')
    }
} else {
    alert('Я вас не знаю!');
}