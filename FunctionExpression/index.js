let a = function(x, y) { // подобная запись называется function expression
    return x + y;
}
alert(a(5, 2));
let b = a;
alert(b(7, 2))



// запись вида 
function AnyFunc() {

}
// называется function declaration

//функции "колбэки"

/*
так как функции 
то отдельный тип, то их можно передавать другим функциям, которые в свою очередь будут извызывать
например

function GiveAnswer(request, badAnswer, goodAnsw){
    if(reqwest.pass == "GoodPass")goodAnsw();
    else{badAnsw();};

}

 таким образом, если для обьекта request не выполниться условие
 то вызовется функция badAnsw();
 в данном случае badAnsw и goodAnsw() называются call-back функциями
 
*/