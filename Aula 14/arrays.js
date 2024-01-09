let alunos = ['Maria', 'Luiz', 'Juliana'];

console.log(alunos);
console.log(alunos[0]); //Para exibir apenas o indíce 0 do array

alunos[3] = 'Luiza'; //Adicionando o Luiza no índice 3 do Array
console.log(alunos);
console.log(alunos.length); //Para saber o tamanho de um Array

alunos.push('Ana'); //Para adicionar um elemento ao final do Array
console.log(alunos);

alunos.unshift('Carlos'); //Para adicionar um elemento no começo do Array
console.log(alunos);

alunos.pop(); //Remove o último elemento do Array
console.log(alunos);

alunos.shift(); //Remove o primeiro elemento do Array
console.log(alunos);

console.log(alunos.slice(0,3));
console.log(alunos.slice(0,-3));

console.log(alunos instanceof Array); //Para verificar se é um Array