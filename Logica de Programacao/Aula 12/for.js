/* Sintaxe do FOR
for (criar váriavel, criar condição, incrementação/decrementação) {

}
 */
for (let i = 0; i <=5; i++){
    console.log (`Linha ${i}`);
}

for (let i = 400; i<= 500; i += 20){
    console.log (`Linha ${i}`);
}

//                 0       1      2
const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}