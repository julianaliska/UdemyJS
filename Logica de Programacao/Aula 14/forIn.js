const frutas = ['Maça', 'Pera', 'Abacaxi'];

/* Forma tradicional
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
} */

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Juliana',
    idade: 25,
    sobrenome: 'Liska',
};

for (let i in pessoa) {
    console.log(pessoa[i]); //Para mostrar o valor das chaves
    console.log(i); //Para mostrar somente as chaves, sem  o valor
    console.log(i, pessoa[i]); //Para mostrar os dois
}