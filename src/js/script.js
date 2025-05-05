//DECLARANDO UM ARRAY DE IMAGENS

let imagens =[
    'src/assets/carro.jpg',
    'src/assets/idosa.jpg',
    'src/assets/vinho.jpg',
]

//DECLARANDO AS VARIAVEIS

let i = 0;
let tempo = 5000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();
