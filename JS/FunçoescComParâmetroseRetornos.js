function calculo_idade(ano_nascimento){
    const data = new Date(); //Gerador de data

    const idade = data.getFullYear() - ano_nascimento; //getFullYear é usado para dar o parâmetro (o calendario dos anos 1000 à 9999 ) para o new Date se situar e dar a data(ano) exata de hoje.

    return idade;
}


function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    console.log(idade);
}

let idade = calculo_idade(1993);
console.log(idade + 3);

calcular_idade2(1993);

const data = new Date;

console.log('Data Completa: ' + data);
console.log('Ano ' + data.getFullYear());
console.log('Mês ' + data.getMonth());

function somar(num1, num2){
    return num1 + num2
}

console.log(somar(4, 6));
console.log(somar(4));
console.log(somar(4, 6, 8));
console.log(somar(4, 6, 8, 3, 2, 1));




