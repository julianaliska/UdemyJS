/*****Sintaxe ******
 * 
try {
    Essa parte é executada quando não há erros
} catch (e) {
    É executada quando há erros
} finally {
    Sempre é executado, mas é possível emitir ele
} 

****/

try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (error) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}

function retornaHora (data){
    if (data &&!(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}
console.log(retornaHora(new Date ('01-01-1970 12:58:12')));

