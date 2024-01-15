/*
* Valores que retornam Falso *
* O 
* null
* '' "" ``
* null / undefined
* NaN
*
*
* Valores diferentes retornam true
*/

console.log ('Luiz Otávio' && 0 && 'Maria'); // Retorna o valor falso da expressão, no caso o 0.
console.log ('Luiz Otávio' && 'João' && 'Maria'); //Se ele não encontrar nenhum valor falso, ele retorna o último valor, no caso o Maria

function falaOi ()
{
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); //Retorna false, pois a vaiExecutar é false
// Se mudar para true, o Oi é executado