function somar(num1, num2){
    return num1 + num2;
}

//let resul = somar(4, 6);
//console.log(resul);

var preco1 = 100, preco2 = 200;


let resultado0 = somar (preco1, preco2);
console.log(resultado0);

function subtrair(num1, num2){
   return num1 - num2;
}

let resultado1 = subtrair (preco1, preco2);
console.log(resultado1);

function multiplicar(num1,  num2){
    return num1 * num2;
}


let resultado2 = multiplicar(preco1, preco2);
console.log(resultado2);

function divição(num1, num2){
    return num1 / num2;
}


let resultado3 = divição(preco1, preco2);
console.log(resultado3); 

let valores = [1, 3.4, true, somar];

for(let i = 0; i < valores.length; i++){
   console.log(typeof(valores[i]));
}