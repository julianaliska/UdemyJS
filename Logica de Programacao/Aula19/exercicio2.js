/* Escreve uma função chamada Epaisagem que recebe dois argumentos, largura e altura de uma imagem )number). 
Retorne true se a imagem estiver no modo paisagem (deitada, laurgura maior)  */

const ePaisagem =  (altura, largura) =>  Number(largura) > Number(altura) ? true : false;

console.log(ePaisagem(1.50, 1.3));
