const nome1 = 'Luiz';
const sobrenome1 = 'Miranda';
const idade1 = 25;

const nome2 = 'Maria';
const sobrenome2 = 'Oliveira';
const idade2 = 55;


//Criação de um Objeto
const pessoa1 = 
{
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};


console.log(pessoa1.nome);

function criaPessoa (nome,sobrenome,idade)
{
    return{
        /*nome: nome, //Quando tem dois valores iguais assim entre pontos, não precisa ficar dessa forma, pode ficar da forma abaixo.
        sobrenome:sobrenome,
        idade:idade
        */
       nome,sobrenome, idade
    };
}

const pessoa3 = criaPessoa('Eliana', 'Pereira', 25);
const pessoa4 = criaPessoa('João', 'Miranda', 28);
const pessoa5 = criaPessoa('Lara', 'Moreira', 30);
const pessoa6 = criaPessoa('Juliana', 'Machado', 25);
const pessoa7 = criaPessoa('Evandro', 'Junior', 40);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);
console.log(pessoa6.nome);
console.log(pessoa7.nome, pessoa7.sobrenome);

const pessoa8 = 
{
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 54,

    fala(){ //Não precisa da palavra function aqui
            // Dentro do objeto é possível se referenciar aos atributos do objeto com o This
        console.log('Olá mundo!');
        console.log(`${this.nome} ${this.sobrenome} está falando Oi...`);
    },

    incrementaIdade(){
        ++this.idade; //Está incrementando a idade
        console.log(`${this.idade}`);
    }
};

pessoa8.fala();
pessoa8.incrementaIdade();