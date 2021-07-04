// методы это функции которые котрые принадлежат объектам

let user = {
    name: "Джон",
    age: 30,
};
user.SayHello = () => alert("Привет!");

// в случае 3 - у нас получается вывод обьета Window
// - то есть this сслыается на контекст уже вызова функции method
// в случае 4 - в случае вызова obj.go - вернётся undefined - а stop вообще нет в обьекте



// ошибка в том что ref - это поле, а должен быть метод

let calc = {

    read() {
        this.a = prompt("Введите a")
        this.a = prompt("Введите b")
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
}


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

// возвразаем тот же обьект при вызове функций