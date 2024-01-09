function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];
    /* Pode selecionar o formulário pelo:
    *  Nome da tag 'form'
    *  Classe - .form
    *  ID - #NomeDoID
    * 
    form.onsubmit = function (evento){ 
    Onsubmit seria para quando o formulário fosse enviado
    O evento seria recebido automaticamente
    evento.preventDefault(); 
    O preventDefault serve para o navegador não agir da maneira que sempre
    age (enviar o formulário e desaparecer as informações do console)
    console.log('Foi enviado!');
    alert(1);
    */
        
        function recebeEventoForm (evento){
            evento.preventDefault();

            let nome = form.querySelector('.nome');
            let sobrenome = form.querySelector('.sobrenome');
            let peso = form.querySelector('.peso');
            let altura = form.querySelector('.altura');

            let pessoa = {
                nome:nome.value,
                sobrenome:sobrenome.value, 
                peso:peso.value,
                altura:altura.value
            };
        

            pessoas.push(pessoa);
            console.log(pessoas);

            function teste(evento){
                resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
                
            }

            teste();
        }

    
        
        form.addEventListener('submit', recebeEventoForm);      
            //O addEventListener seria para escutar um evento no formulário
            //Também recebe uma função
    };


meuEscopo();