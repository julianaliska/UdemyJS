const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for (let i = 0; i < elementos.length; i++){
    let novoElemento = document.createElement(elementos[i].tag);
    novoElemento.innerHTML = elementos[i].texto;
    let container = document.querySelector('.container');
    container.appendChild(novoElemento);
}