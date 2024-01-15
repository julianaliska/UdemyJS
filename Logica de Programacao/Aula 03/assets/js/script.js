/* function principal() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let altura = form.querySelector('.altura');
        let peso = form.querySelector('.peso');
        let imc = peso.value / (altura.value * altura.value);

        console.log(altura.value, peso.value, imc);

        function validacao(evento) {
            evento.preventDefault();
            if (imc < 18.5) {
                document.body.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
            } else if (imc >= 18.5 && imc <= 24.9) {
                document.body.innerHTML += `Seu IMC é ${imc} (Peso normal)`;
            } else if (imc >= 25 && imc <= 29.9) {
                document.body.innerHTML += `Seu IMC é ${imc} (Sobrepeso)`;
            } else if (imc >= 3 && imc <= 34.9) {
                document.body.innerHTML += `Seu IMC é ${imc} (Obesidade grau 1)`;
            } else if (imc >= 35 && imc <= 39.9) {
                document.body.innerHTML += `Seu IMC é ${imc} (Obesidade grau 2)`;
            } else if (imc > 40) {
                document.body.innerHTML += `Seu IMC é ${imc} (Obesidade grau 3)`;
            }
        }

        validacao();
    }

    form.addEventListener('submit', recebeEventoForm);
}



principal(); */

function principal() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let altura = form.querySelector('.altura');
        let peso = form.querySelector('.peso');


        if (altura.value > 2.0 || peso.value > 250 || peso.value < 20 ){
            resultado.innerHTML = `Altura ou Peso inválido!`;
        }
        else {
            let imc = peso.value / (altura.value * altura.value);
            console.log(altura.value, peso.value, imc);
            validacao(imc);
        }
    }

    function validacao(imc) {


        if (imc < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        } else if (imc >= 40) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

principal();
