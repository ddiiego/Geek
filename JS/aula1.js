var curso = [
    'lista 1',
    'lista 2',
    'lista 3',
    'lista 4',
    'lista 5',
    'lista 6',
    'lista 7',
    'lista 8',
];

//console.log(curso);
//console.log(curso.length);

//Definir uma função
function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
}

//Para cada
//curso.forEach(imprimir);

curso.forEach (function(curso, indice){
   console.log(`${indice} - ${curso}`);
});

// Ou isso(forEach ou for )
for(var i = 0; i < curso.length; i ++){
    console.log(i + ' - ' + curso[i]);
}