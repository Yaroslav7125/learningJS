/*
1   3
    2
    1
сначала 
*/

/*
2
в первом случае с 1 2 3 4
во втором случае с 1 2 3 4 5 так как при i = 4  - 5 присвоено будет только после сравнения 


*/

for (let i = 2; i < 10; i = i + 2) {
    console.log(i);
}

console.log("________________________________-");
let i = 0;
while (i < 3) {
    console.log(`number ${i}`);
    i++;
}

//------------------------

let a;
while (true) {
    a = prompt("Введите число болшее 100");
    if (a > 100 || null) {
        break;
    }

}

//--------------------------------
let n = 50;
let start = 2;
theMark: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue theMark;
        }
    }
    console.log(i);

}