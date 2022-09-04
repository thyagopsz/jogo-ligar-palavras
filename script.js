const palavrasPortugues = document.querySelectorAll('.container-palavras-portugues li');
const palavrasIngles = document.querySelectorAll('.container-palavras-ingles li');


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
    e.target.classList.remove('hover');
}



palavrasPortugues.forEach((item) =>{
    item.addEventListener('dragstart' , dragstart);

})

palavrasIngles.forEach((item) =>{
    item.addEventListener('dragstart' , dragstart);
    item.addEventListener('dragenter' , dragenter);
    item.addEventListener('dragover' , dragover);
    item.addEventListener('dragleave' , dragleave);
    item.addEventListener('drop' , drop);
})