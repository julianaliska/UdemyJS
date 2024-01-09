function saudacao (nome)
{
    return(`Bom dia! ${nome}`); //Existem funções que não vão retornar valores
    
}

const variavel = saudacao('Luiz'); //Sempre que for chamar uma função precisa colocar os parenteses para mostrar que a função está sendo executada nesse momento
console.log(variavel);

function soma (x, y) 
{
    let resultado = x + y;
    return resultado; //Essa váriavel fica criada somente dentro da função
    //A função não lê mais nada após o return
}

console.log(soma(2,2)); //Uma função que faz a soma
console.log(soma(4,20));
console.log(soma('Luiz', 'Otávio')); //Ele concatena o resultado

let raiz = function(n)
{
    return n ** 0.5;
}; //Quando tem o = tem que ter o ; no final da função

console.log(raiz(8));
console.log(raiz(16));

let razi2 = n => n ** 0.5; //Outro jeito de criar uma função
