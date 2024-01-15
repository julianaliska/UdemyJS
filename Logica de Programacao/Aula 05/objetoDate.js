
//Sempre quando utiliza o new, é para usar uma função construtura

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);

console.log(data);

const criarData = new Date(2019, 3, 20, 15, 14, 27);
//Ano, mês, dia, horas, minutos, segundos
console.log(criarData);

const criarData2 = new Date('2019-04-20 20:20:59');
console.log(criarData2);
console.log(`Dia ${criarData2.getDate()}`); // obtem o número do dia
console.log(`Mês ${criarData2.getMonth()}`); // obtem o mês do dia
console.log(`Ano ${criarData2.getFullYear()}`); // obtem o ano do dia
console.log(`Hora ${criarData2.getHours()}`); // obtem o hora do dia
console.log(`Min ${criarData2.getMinutes()}`); // obtem o minuto do dia
console.log(`Sec ${criarData2.getSeconds()}`); // obtem o segundo do dia
console.log(`ms ${criarData2.getMilliseconds()}`); //GetDate obtem o milissgundo do dia
console.log(`Dia da semana ${criarData2.getDay()}`); //GetDate obtem o dia da semana do dia 0 - Domingo, 6 - Sabado

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() +1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getDay();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data2 = new Date();
const dataBrasil = formataData(data2);
console.log(dataBrasil);

function zeroAEsquerda (num)
{
    return num >= 10 ? num : `0${num}`;
}

console.log(zeroAEsquerda(9));