/* Operador ternário 
*         ? :
*/

const pontuacaoUsuario = 999;
const nivelUsuário = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// (Se essa afirmativa (pontuacaoUsuario >= 1000) for verdadeira, aparece a primeira afirmação após o ?)                        
console.log(nivelUsuário);

/* if (pontuacaoUsuario >= 1000){
    console.log ('Usuário VIP');
} else {
    console.log ('Usuário normal');
} */


//Sintaxe
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const corUsuario = 'Amarelo';
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);