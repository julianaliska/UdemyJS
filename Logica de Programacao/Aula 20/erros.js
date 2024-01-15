/* try {
    console.log(naoExisto);
} catch (err){
    console.log('naoExisto não existe');
} */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x ou y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma(10, 5));
    console.log(soma('y', 5));
} catch (error){
    //console.log(error);
    console.log('Alguma coisa mais amigável para o usuário');
}

