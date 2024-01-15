// Funcionam em todos os laços - while, switch e for
// Continue ele apenas corta aquela opção
// Break corta totalmente a operação

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 8 || numero === 5) {
        continue;
    }
    console.log(numero);
}