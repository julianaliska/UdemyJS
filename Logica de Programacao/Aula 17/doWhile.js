// Do while siginifica 'Faça e depois cheque', primeiro ele executa o código e depois verifica a condição

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);