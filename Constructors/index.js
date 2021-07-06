function User2(name) {
    //this = {}
    this.name = name;
    this.BoolItem = false;
    // return this
}
/*
конструктором называется функция которая вернёт создаваемый обьект
подобные функции вызваются через оператор new
name в данном сучае это необзодимый параметр для создания обьекта, например 

*/
let someUser = new User("Даша", 18);

// возможна также проверка - вызвана функция через new или нет
// внутри функции new.target возвращает саму функцию, в случае если функция была вызвана без new new.target вернёт undefined:


// tasks 
// 1
/*
да взможно, ссылки должны возвращать ссылку на один и тот же обькт

*/
let a = { name: "iiiigor" };

function A() {
    return a;
};

function B() {
    return a;
};

if ((new A()) == (new B())) console.log("++++");

// Task 2

function Calculator() {
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    }
    this.sum = () => {
        return (this.a + this.b);
    }
    this.mul = () => {
        return (this.a * this.b);
    }
}


calc = new Calculator();
calc.read(7, 5);
alert(calc.mul());


///task 3

function Accumulator(startVal) {
    this.startVal = startVal;
    read = () => {
        let integ = prompt("Введите число");
        this.startVal += integ;
    }
    value /**/
}