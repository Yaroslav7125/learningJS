let browser = prompt("Ваш браузер");
let arr = ['Chrome', 'Firefox', 'Safari', 'Opera'];

if (browser == "Edge") {
    alert("You have got Edge!");


} else if (arr.includes(browser)) {
    alert('Okey we support these browsers too')
} else {
    alert("So, We hope that this page looks OK!")
}

/**/

let number = 0;
switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}