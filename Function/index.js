function CheckAge(age) {
    return ((age > 18) ? (true) : (confirm('Родители разрешили?')));
}

function CheckAge2(age) {
    return age > 18 || confirm('Родители разрешили?')
}


if (CheckAge2(15)) alert(true);



function GetMin(a, b) {
    if (a > b) return a;
    if (b > a) return b;
    return a;

}

// /ЫЫЫЫ рекурсия
function GetPow(Int, pow_int) {
    if (pow_int != 0) {
        return Int * GetPow(Int, pow_int - 1);
    } else {
        return 1;
    }
}
alert(GetPow(2, 3));