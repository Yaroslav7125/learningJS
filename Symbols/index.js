//Symblos - это тип данных
// каждый символ уникален, даже при условии одинкового имени

// создание символов:

    let id = Symbol();


// для создания имени или описания символа следует передавать имя
    //в виде строки в конструтор:
    let id_2 = Symbol("id");



// два символа с одиноковым описанием уникальны


let firstId = Symbol("id");
let secondId = Symbol("id");

console.log(firstId == secondId); // верёт false так как два символа с одинаковым описанием разные

// также символы не преобразуются динамчески в строки

// у символа можновывести имя(описание)

console.log(Symbol("qwe").description); // выведет qwe 


// символы позволяют органиховать скрытые свойства обьектов:
 let  NewObObj= {
    name:"Вася",
 }
 let fullName=Symbol("FullName");
 NewObObj[fullName] = "ВасяЕгоров"; // таким образом в другиз частях программы не получиться обратиться к этому совству
 // тоесть fullName есть скрытый ключ

 //также можно полезно испольтзовлать подобную организацию свойств по той причине - что это безопасно
 //в разных чстях программы у обьектов можно ненамеренно перезаписать свойство и в таком случае это приведёт к логическим ошибкам
 //а в случае с символами - даже символы с одинковыми описаниями будут рзными

// символьныесвойств игнорирутся for..in 
// но символьные свойства не игнорируются Object.assign({}, obj)

 // символы в литеральном обьекте:

let fullName2 = Symbol("TheFullName");

let user = {
    id:123,
    name: 'Игорь',
    [fullName2]:'Игорь Васильевич'
}

///
//Глобальные обьекты
/// 

// символы с одинаковым описанием всегда разные:
    // но если необходимо чтобы симолвы с оодинковым описанием при срвнении возвращали True
    // необходимо испольховать глобальный реестр симолов


// обьявление глобального символа(произходит чтение из глобального реестра либо создание):
let key = "123"; 
let firstSymbol = Symbol.for(key);


/*какой либо код */


let secondSymbol = Symbol.for(key)
console.log(firstSymbol == secondSymbol); // выведет true так как есть глобальные символы



// также для того чтобы получить ключ глобального символа следует использовать метод Symbol.keyFor

console.log(Symbol.keyFor(secondSymbol));
console.log(firstSymbol);
