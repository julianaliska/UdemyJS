let palavra = "Um texto";
let frase = "O rato roeu a roupa do rei"

console.log (palavra[3]); //Exibir apenas o caractere 3 da String

console.log(palavra.charAt(5)); //Retorna o caractere no espaço

console.log (palavra.concat(' em um lindo dia'));
console.log (`${palavra} em um lindo dia`);

console.log(palavra.indexOf("m")); //Procura pela posição em que aparece os caracteres no colchete
console.log(palavra.lastIndexOf("m")); //Procura pela posição em que está o caractere, mas começa de trás para frente

console.log(palavra.indexOf("m", 3)); //Procura pela posição contando a partir da casa 3
console.log(palavra.lastIndexOf("m", 3)); //Procura pela posição começando pelo final e a partir da casa 3

console.log(palavra.match(/[a-z]/g));

console.log(palavra.search(/x/)); //Pede para ele encontrar a letra x na String

console.log(palavra.replace('Um', 'Outra')); //Substitui a palavra por outra

console.log(frase.replace(/r/g, '#')); //O g faz o r ser substituido em todos os lugares, sem o g ele é apenas substituito no primeiro lugar 

console.log(frase.length); //Mostra o tamanho de uma string

console.log(frase.slice(3,6)); //Corta o tamanho da stirng nas posições indicadas

console.log(frase.slice(-5));

console.log(frase.split('r')); //Divide a string pelo que está indicado nos colchetes, tem como colocar uma quantidade de vezes também 

console.log(frase.toUpperCase()); //Aumenta o tamanho da String

console.log(frase.toLowerCase()); //Diminui o tamanho da String