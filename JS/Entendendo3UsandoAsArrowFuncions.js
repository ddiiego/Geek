//Forma 1
function somar1(num1,num2){
    return num1 + num2;
}
console.log(somar1(4, 6));

//Forma 2
let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(4, 6));

//Forma 3
const somar3 = somar1;

console.log(somar3(4, 6));

//Arrow Function
const somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4, 6));


/*

Atenção:

Caso a função tenho apenas um parâmetro de entreda e execute apenas uma linha,
você pode simplificar usando Arrow function.

*/

const dobro = valor => valor * 2;

console.log(dobro(5));

function mensagem1(){
    console.log("Geek");
}

mensagem1();

const msg = () => console.log("Geek!");

msg();

