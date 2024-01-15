const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); //Para pegar todos as tags <p> de dentro da classe paragrafos

const estilosBody = getComputedStyle(document.body); //Para pegar o estilo do elemento body do html/css
const background = estilosBody.backgroundColor; //Para pegar especificamente a cor do Body


for (let i of ps){
    i.style.backgroundColor = background;
    i.style.color = '#FFFFFF';
}