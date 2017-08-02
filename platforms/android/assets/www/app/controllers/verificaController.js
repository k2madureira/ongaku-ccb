function verificaSenha(event){

	var $=document.querySelector.bind(document);
    
    
    var campEmail = $("#email");
    var campSenha = $('#senha');
    var msg = $("#mensagem");
    let email = campEmail.value;
    let senha = campSenha.value;
    let liberaSenha = 0;	
    let liberaEmail = 0;
  
    event.preventDefault();

      if(senha.length == 0){

      	liberaSenha = 1;
        setTimeout(function(){
            msg.classList.add("erro-visivel");
            msg.textContent = "Por favor, preencha o campo (Senha).";
       },500);

      }if(senha.length <= 6 || senha.length >= 15){
      	
      	liberaSenha = 1;
      	setTimeout(function(){
            msg.classList.add("erro-visivel");
            msg.textContent = "A senha deve possuir de 7 a 14 caracteres.";  
       },500);

      }
      if(!email){

      	liberaEmail = 2;
      	setTimeout(function(){
            msg.classList.add("erro-visivel");
            msg.textContent = "Por favor, preencha o campo (Email).";
       },500);

      }
        
      if((liberaSenha == 0 )&& (liberaEmail == 0)){ 
     	      EfetuaLogin();  
      }
}

function EfetuaLogin(){

	  
    /*var FormLogin = new LoginController();
    var resultado =FormLogin.login();*/

    var query=document.querySelector.bind(document);
  
    var campEmail = query("#email");
    var campSenha = query('#senha');
    let email = campEmail.value;
    let senha = campSenha.value;
    let requisicao='login';
    
    
    

          $.ajax({
              type: "POST",
              url: "adm/app/controllers/UsuarioController.php",
              data: {email:email,senha:senha,requisicao:requisicao},
              cache: false,
              beforeSend: function(){console.log('enviando...');},
              success: function(data){
                    
                    let num = data.length;
                    var $=document.querySelector.bind(document);
                    var entrar = $("#bto-entrar");
                    var cadastrar = $("#bto-cadastrar");
                    var msg = $("#mensagem");
                    var anima = $("#animacao");
                    var boxImg = $("#box-imgs-login");
                    var box = $(".login");
                    console.log(num);
                    
                    if(num == 11){
                        setTimeout(function(){
                            msg.classList.add("erro-visivel");
                            msg.textContent = "Email incorreto";
                       },500);

                    }
                    if(num == 9){
                      
                      
                       setTimeout(function(){
                            msg.classList.add("erro-visivel");
                            msg.textContent = "Email ou senha incorretos";
                       },500);
                      
                    }if(num == 6){
                         msg.classList.remove("erro-visivel");
                           msg.textContent ='';

                        let carregando = setInterval(function(){ 

                                box.classList.add("box-invisivel");
                                boxImg.classList.add("box-invisivel");
                                anima.classList.add("carregamento");
                                entrar.textContent = "Carregando..";
                                cadastrar.textContent="";
                        }, 500);

                        setTimeout(function(){
                             
                              
                                clearInterval(carregando);  
                                entrar.textContent ="Finalizado";
                                window.location.reload();
                        },2000);

                     
                    }                   
                  }
          
              });
    
}

function EfetuaLogout(){


    let requisicao= 'logout';


            $.ajax({
              type: "POST",
              url: "../controllers/UsuarioController.php",
              data: {requisicao:requisicao},
              cache: false,
              beforeSend: function(){console.log('logof...');},
              success: function(data){
    
                    window.location.reload();
                  }
          
              });
            
            return 'ok';
  }

