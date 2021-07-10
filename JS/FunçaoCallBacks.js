const cursos = [
    'Programação para leigos',
    'Algoritimo e lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação web com Django Freamework',
    'Programção em java Script'
]

function apresentar(curso,indce){
    console.log(`${indice + 1} - ${curso}`);
}
cursos.forEach(apresentar); //Aqui está ocorrendo o CallBacks

//Usando lambda
Cursos.forEach (function(curso, indice){
console.log(`${indice} + ${curso}`);});

//Usando arrow

cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso} `));

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = []
for(let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}
console.log(menores);

for (let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}

console.log(menores);

//forma 1
menores = precos.filter(function( preco){
    return preco < 50;
}

//forma 2
menores = precos.filter(preco => preco < 50);

console.log(menores)

