/* const data = new Date();
const container = document.querySelector('.container');

const dia = data.getDay();
const numero = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

switch (dia) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
}

switch (mes) {
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 1:
        mesTexto = 'Janeiro';
        break;
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 0:
        mesTexto = 'Janeiro';
        break;
}


container.innerHTML = `<h1>${diaSemanaTexto}, ${numero} de ${mesTexto} de ${ano} <p> ${hora}:${minuto}<h1>`;
 */

const container = document.querySelector('.container');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

container.innerHTML = `<h1>${data.toLocaleString('pt-BR', opcoes)}<h1>`;