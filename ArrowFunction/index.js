let sum = (b, a) => a + b;

alert(sum(3, 2));

// стрелочные функции позволляют обьяляьть функции динамически как и Function Expressoin



/*
многострочная стрелочная функция
let sum  = (a, b) => {
    return(a+b)
    
};

*/



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask("Вы согласны?", () => { alert("Вы согласны?"); }, () => { alert('Cancel execution') })