/*let xuxa = 'global';// Pode ser acessado globalmente no bloco/contexto

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = 'local';//Pode ser acessado localmente no bloco/contexto
    imprimir();
    console.log(xuxa);
}

outra(); */

//Novo exemplo

let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel;
    }
    return interna;
}
let executa = externa();

console.log(executa( ));