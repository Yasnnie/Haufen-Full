if (document.querySelector("#desc")) {
    document.querySelector("#staff").addEventListener("mouseover", function (event) {
        document.querySelector('body').style = "background: url(../image/Teste/fundo5verde.jpg); background-size: 1500px 800px;  transition: all .5s;";
        document.querySelector("#infoStaff").classList.add("animacao1");
    });

    document.querySelector("#staff").addEventListener("mouseout", function (event) {
        document.querySelector('body').style = "";
        document.querySelector("#infoStaff").classList.remove("animacao1");
    });


    document.querySelector("#sobre").addEventListener("mouseover", function (event) {
        document.querySelector('body').style = "background: url(../image/Teste/fundo5verde.jpg); background-size: 1500px 800px; transition: all .5s; ";
         document.querySelector("#infoSobre").classList.add("animacao1");
    });

    document.querySelector("#sobre").addEventListener("mouseout", function (event) {
        document.querySelector('body').style = "";
        document.querySelector("#infoSobre").classList.remove("animacao1");
    
    });

    document.querySelector("#doacoes").addEventListener("mouseover", function (event) {

        document.querySelector('body').style = "background: url(../image/Teste/fundo5verde.jpg); background-size: 1500px 800px; transition: all .5s; ";
        document.querySelector("#infoDoacao").classList.add("animacao1");
    });

    document.querySelector("#doacoes").addEventListener("mouseout", function (event) {
        document.querySelector('body').style = "";
        document.querySelector("#infoDoacao").classList.remove("animacao1");
    });


    document.querySelector("#projetos").addEventListener("mouseover", function (event) {
        document.querySelector('body').style = "background: url(../image/Teste/fundo5verde.jpg); background-size: 1500px 800px; transition: all .5s;";
        document.querySelector("#infoProjeto").classList.add("animacao1");
    });

    document.querySelector("#projetos").addEventListener("mouseout", function (event) {
        document.querySelector('body').style = "";
        document.querySelector("#infoProjeto").classList.remove("animacao1");

    });
}