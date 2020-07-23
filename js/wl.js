
//MUDAR HTML PARA A PÁGINA DO INICIO

if (document.querySelector("#voltarInicio")) { 
    document.querySelector("#voltarInicio").addEventListener("click", function (event) {
        window.location = "../index.html";
    });
}

//CÓDIGO DE VERIFICAÇÃO DE PREENCHIMENTO

if (document.querySelector("#botao")) {
    //CÓDIGO PARA PREVINIR EVENTO DEFAULT DO BUTÃO
    document.querySelector("#botao").addEventListener("click", function (event) {
        event.preventDefault();

        let burro = false;
        let aux = 0;
        let discord = document.querySelector("#discord");
        let steam = document.querySelector("#steam");
        let q1 = document.querySelectorAll('#q1 input[type="radio"]');
        let q2 = document.querySelectorAll('#q2 input[type="radio"]');
        let q3 = document.querySelectorAll('#q3 input[type="radio"]');
        let q4 = document.querySelectorAll('#q4 input[type="radio"]');
        let q5 = document.querySelectorAll('#q5 input[type="radio"]');
        let q6 = document.querySelectorAll('#q6 input[type="radio"]');
        let vetaux = [q1,q2,q3,q4,q5,q6];



        if (discord && steam && q1 && q2 && q3 && q4 && q5 && q6) {

           //CÓDIGO DE VERIFICAR TEXT AREA
            if (discord.value == "") {

                burro = true;
            }

            if (steam.value == "") {

                burro = true;
            }

            //CÓDIGO DE VERIFICAR O RADIO BUTTON
            vetaux.forEach(element => {
               element.forEach(respostas => {
                if (respostas.checked){
                    aux++;
                }

               });
  
            });
        
            if(aux != 6){
                burro=true;
            }
            
            console.log(aux);
        }
        if (!burro) {
            document.querySelector("form").submit();
        } else {
            alert("TA ERRADO FDP (~SOCÃO NA CARA~)");
        }

    });
}

