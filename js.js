// Temos que referenciar input
let input = document.querySelector('input[name=tarefa]');

// Temos que referenciar o buttin
let btn = document.querySelector('#botao');

//temos que referenciar a lista
let lista = document.querySelector('#lista');

//card
let card = document.querySelector('.card');

let tarefas = [
    'Jogar GTA5',
    'Estudar Python',
    'Ver um filme',
    'Estudar javascript',
    'Ler um livro'
];

function renderizarTarefas(){

    //Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        //Criar o item de lista
        let itemLista = document.createElement('li');

        //Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //Adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        //Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        //Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        //Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

//Executando a função para renderizar as tarefas 
renderizarTarefas();

//Precisamos "escutar" o evento de clique no botão
btn.onclick = function(){
    //Precisamos capturar o valor digitado pelo usúario no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
        //Precisamsos atualizar a nova tarefa na lista (array) de tarefa e renderizar a tela
        tarefas.push(novaTarefa);

        //Executando a função para renderizar as tarefas
        renderizarTarefas();
        
        //Limpar o input
        input.value = '';
        //Limpar mensagens de erros (spans)
        removerSpans();
    }else{
        //Limpar mensagens de erros (spans)
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informa a tarefa!');

        span.appendChild(msg);
        card.appendChild(span);   
     }
}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    //Remover a tarefa do arrey
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    //Renderiza novamente a tela
    renderizarTarefas();
}