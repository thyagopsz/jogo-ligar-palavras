const palavrasPortugues = document.querySelector('.container-palavras-portugues');
const palavrasIngles = document.querySelector('.container-palavras-ingles');

let termos = [   
    {
        ingles: 'this',
        portugues: 'isso'
    },
    {
        ingles: 'bola',
        portugues: 'ball'
    },
    {
        ingles: 'Qual seu nome?',
        portugues: 'What\'s is your name?'
    },
    {
        ingles: 'that',
        portugues: 'aquilo'
    }
];


function adicionarEventos(){
    const listaPortugues = document.querySelectorAll('.container-palavras-portugues li');
    const listaIngles = document.querySelectorAll('.container-palavras-ingles li');
    
    listaPortugues.forEach((item) =>{
        item.addEventListener('dragstart' , dragstart);

    })
    
    listaIngles.forEach((item) =>{
        item.addEventListener('dragstart' , dragstart);
        item.addEventListener('dragenter' , dragenter);
        item.addEventListener('dragover' , dragover);
        item.addEventListener('dragleave' , dragleave);
        item.addEventListener('drop' , drop);
    })

}

function dragstart(e){
    console.log('dragstart');
    e.target.classList.add('movendo');
}
function dragenter(e){
    console.log('dragenter');
    e.target.classList.add('hover');
}

function dragleave(e){
    console.log('dragleave');
    e.target.classList.remove('hover');
}

function dragover(e){
    e.preventDefault();
    console.log('dragover');

}
function drop(e){
    //remove hover do item em inglês
    e.target.classList.remove('hover');
    const palavraPortuguesArrastada = document.querySelector('.movendo');
    //verificação se é a palavra correta em ingles e portgugês
    if(palavraPortuguesArrastada.dataset.palavra === e.target.dataset.palavra){
        e.target.remove();
        palavraPortuguesArrastada.remove();
    }
    palavraPortuguesArrastada.classList.remove('movendo');

    if(checar()){
        document.querySelector('.container').classList.add('hide');
        document.querySelector('.telaFim').classList.remove('hide');
    }
}


function popularListasPortuguesIngles(){    
    sortear();
    termos.forEach(tema =>{
        palavrasPortugues.innerHTML += `<li draggable="true"  data-palavra="${tema.ingles}" >
        ${tema.portugues}</li>`
    })
    sortear();  
    termos.forEach(tema =>{
        palavrasIngles.innerHTML += `<li draggable="true"  data-palavra="${tema.ingles}" >
        ${tema.ingles}
    </li>`
    })
}

function sortear(){
    let tamanho = termos.length;
    for(let i = tamanho-1;i>0;i--){
        let posicaoSorteada  =  Math.floor(Math.random() * (i+1));
        let aux = termos[posicaoSorteada];
        termos[posicaoSorteada] = termos[i];
        termos[i] = aux;
    }
}

function checar(){
    const tamanhoPalavras = document.querySelector('ul').children.length;
    if(tamanhoPalavras != 0){
        return false;
    } else{
        return true;
    }
}

function reiniciar(){
    window.location.reload();
}

window.addEventListener('load' , ()=>{
    popularListasPortuguesIngles();
    adicionarEventos();
})