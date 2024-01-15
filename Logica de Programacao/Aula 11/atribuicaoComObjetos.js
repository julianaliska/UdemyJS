const pessoa = {
    nome:  'Juliana',
    sobrenome: 'Liska',
    idade: 25,
    endereco: {
        rua: 'Zeferino Dias',
        numero: 151
    }
};

const { nome, sobrenome, idade } = pessoa; 
/* Atribuição via desestruturação
É chamado desse modo pois está passando um objeto e está falando para extrair
essa chave aqui */
console.log(sobrenome);

const { endereco: {rua, numero }} = pessoa;
console.log(rua);