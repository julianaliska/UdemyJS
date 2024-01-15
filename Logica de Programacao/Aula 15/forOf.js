
//Funcionam com valores iteráveis (com índices)
const nome = ['Juliana', 'Liska', 'Machado'];

for (let i in nome){
    console.log(nome[i]);
}

console.log('------------------------------------------');

for (let i of nome){
    console.log(i);
}

console.log('------------------------------------------');

nome.forEach(function (elemento, indice){
    console.log(elemento, indice);
});

/* 
* For clássico - Geralmente com iteráveis (arrays ou string)
* For in - Retorna o índice ou chave (String, array ou objetos)
* For of - Retorna o valor em si (iteráveis, arrays ou string) 
*/