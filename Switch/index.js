let browser = prompt("Ваш браузер");
let arr = ['Chrome', 'Firefox', 'Safari', 'Opera'];

if (browser == "Edge") {
    alert("You have got Edge!");


} else if (arr.includes(browser)) {
    alert('Okey we support these browsers too')
} else {
    alert("So, We hope that this page looks OK!")
}