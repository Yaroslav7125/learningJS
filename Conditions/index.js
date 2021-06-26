if (5) {
    alert(Boolean(5));;
}

let a = prompt("Введите переменнуб")
if (a) {
    if (a > 0) {
        alert("a > 0");
    } else {
        alert("a < 0")
    }
} else if (a == "0") {
    elert("a = 0")

}

let Age = (prompt("write your age")) ? "age > 0" : "wrong age"; // аля попытка проверка  на null


//tasks
//1) да 
//2) 

let jsName = prompt("какоеофициаьлное имя у js?")
if (jsName = "ECMAScript") {
    alert("Всё верно");
} else {
    alert("Не знаете ECMAScript");
}


//3) 
let number = Number(prompt("Write Number"));
alert(number);
number >= 0 ? (String(number) == "0" ? alert("0") : alert("1")) : alert("-1");
//4)

let result = (a + b) < 4 ? "Мало" : "Много";
//5)
let message = login == 'Сотрудник' ? message == 'Привет' : (login == 'Директор' ? message = 'Здравствуйте' : (login == "" ? login = 'Нет логина' : message = ''))



//