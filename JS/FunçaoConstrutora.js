// Crinando uma função construtora

function Pessoa(n, s, raca = 'humano'){
//atributos privados so conseguimos usar na função contrutora
let altura = 0.30;
let peso = 0.5;
let idade = 0;
let nome = n;
let sexo = s;

//Atributos publicos podem ser acessados de fora da funçãom construtora
this.raca = 'Humano';

//metodo privados só conseguimos fazer uso de dentro da função construtora
let imprimir_dados = function(){
    console.log(`Nome: ${nome}, Idade: ${idade}, peso: ${peso}, Altura: ${altura}, sexo: ${sexo} `);
}

//métodos publicos conseguimos acessar de fora da função construtora
this.fazer_aniversario = function(){
    idade += 1;
    imprimir_dados();
}

this.getIdade =  function(){
    return idade;
}

}

const angela =  new Pessoa('Angela, feminino');
console.log(angela);


console.log(angela.peso);
console.log(angela.raca);

angela.fazer_aniversario();
