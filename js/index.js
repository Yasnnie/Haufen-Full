

if(document.querySelector("#soc")){
    document.querySelector("#imgInsta").addEventListener("click", function (event) {
        window.open ("https://www.instagram.com/yas_fca/");
    });
    document.querySelector("#imgTwt").addEventListener("click", function (event) {
        window.open ("https://twitter.com/yas_nnie");
    });

}


if (document.querySelector("#but")) {
    document.querySelector("#botaoWl").addEventListener("click", function (event) {
        window.location = "../html/wl.html";
    });
    document.querySelector("#botaoWl").addEventListener("mouseover", function(event){
    
        document.querySelector('body').style = "background-image: url(../image/Teste/fundo5verde.jpg);  transition: .3s;";
        document.querySelector("#botaoDs").style = "filter: blur(3px); transition: .3s;";
        document.querySelector("#botaoSobre").style = "filter: blur(3px); transition: .3s;";
        document.querySelector("#botaoServ").style = "filter: blur(3px); transition: .3s;";
    });
    document.querySelector("#botaoWl").addEventListener("mouseout", function (event) {
        document.querySelector("body").style = "";
        document.querySelector("#botaoDs").style="";
        document.querySelector("#botaoSobre").style="";
        document.querySelector("#botaoServ").style="";
       
    });
   


    document.querySelector("#botaoDs").addEventListener("click", function (event){ 
                  window.open("https://discord.gg/QsYqCMm");
             });
    document.querySelector("#botaoDs").addEventListener("mouseover", function(event){
    
        document.querySelector('body').style = "background-image: url(../image/Teste/fundo5verde.jpg);  transition: .3s;";
        document.querySelector("#botaoWl").style = "filter: blur(3px); transition: .3s;";
        document.querySelector("#botaoSobre").style = "filter: blur(3px); transition: .3s;";
        document.querySelector("#botaoServ").style = "filter: blur(3px); transition: .3s;";

     });
    document.querySelector("#botaoDs").addEventListener("mouseout", function (event) {
            document.querySelector("body").style = "";
            document.querySelector("#botaoWl").style="";
            document.querySelector("#botaoSobre").style="";
            document.querySelector("#botaoServ").style="";
     });




    document.querySelector("#botaoSobre").addEventListener("click", function (event) {
                  window.location = "../html/sobre.html";
             });
            document.querySelector("#botaoSobre").addEventListener("mouseover", function(event){
    
                document.querySelector('body').style = "background-image: url(../image/Teste/fundo5verde.jpg);  transition: .3s;";
                document.querySelector("#botaoDs").style = "filter: blur(3px); transition: .3s;";
                document.querySelector("#botaoWl").style = "filter: blur(3px); transition: .3s;";
                document.querySelector("#botaoServ").style = "filter: blur(3px); transition: .3s;";
             });
        document.querySelector("#botaoSobre").addEventListener("mouseout", function (event) {
                    document.querySelector("body").style = "";
                    document.querySelector("#botaoDs").style="";
                    document.querySelector("#botaoWl").style="";
                    document.querySelector("#botaoServ").style="";
             });





             
    document.querySelector("#botaoServ").addEventListener("click", function (event) {
                  window.location = "../html/servidores.html";
             });

        document.querySelector("#botaoServ").addEventListener("mouseover", function(event){
    
                document.querySelector('body').style = "background-image: url(../image/Teste/fundo5verde.jpg);  transition: .3s;";
                document.querySelector("#botaoDs").style = "filter: blur(3px); transition: .3s;";
                document.querySelector("#botaoWl").style = "filter: blur(3px); transition: .3s;";
                document.querySelector("#botaoSobre").style = "filter: blur(3px); transition: .3s;";
                
             });
        document.querySelector("#botaoServ").addEventListener("mouseout", function (event) {
                    document.querySelector("body").style = "";
                    document.querySelector("#botaoDs").style="";
                    document.querySelector("#botaoWl").style="";
                    document.querySelector("#botaoSobre").style="";
                    
             });




}

