function continuar(){

	var $=document.querySelector.bind(document);
	var msg = $("#mensagem");
	/*============ bax img clave de sol/voltar==================*/
	var box_img_sol=$('.clave-sol-continuar');
	var voltar =$('.voltar');
	var inicio =$('.inicio');

	/*============ elementos box-cadastrar======================*/	
	var btn_continuar = $('.botao-continuar');
	var box_cadastro =$('.cadastro');
	var labels_cadastro=$('.labels-cadastro');

	/*============ elementos box-musical =======================*/
	var btn_cadastrar = $('.botao');
	var box_cadastro_musical=$('.cadastro-musical');
	var labels_cadastro_musical=$('.labels-cadastro-musical');

	/*===========inputs box-cadastrar===========================*/
	var campNome =$('#nome');
	var campSobrenome =$('#sobrenome');
	var campEmail = $("#email");
	var campSexo = $("#sexo");
	var campSenha = $('#senha');
	var campSenha2 = $('#confirma_senha');

	/*--------- valores-------------*/
	var nome=campNome.value;
	var sobrenome= campSobrenome.value;
	var email= campEmail.value;
	var sexo= campSexo.value;
	var senha=campSenha.value;
	var senha2=campSenha2.value;
	/*------------------------------*/

	var achouErro = 0;
	var padrao;
	event.preventDefault();
/*===========================================================
		-> Verificando campos do formulário parte I.
 ============================================================*/	
	if(!nome || !sobrenome || !email || !senha || !senha2){

			padrao = 'campo';
			achouErro = mensagemErro(padrao);
			
	}

	 if(senha2 != senha){

   		 	padrao = 'senha';
			achouErro = mensagemErro(padrao);

    }
    if(senha.length <= 6 || senha.length >= 15){
      	
			padrao = 'senhaIncompleta';
			achouErro = mensagemErro(padrao);    
      }
 /*==========================================================
		->	caso todos preenchidos carrega parte II.
 ============================================================*/	    

    if(achouErro == 0){


		event.preventDefault();

		btn_continuar.classList.add("box-invisivel");
		box_cadastro.classList.add("box-invisivel");
		labels_cadastro.classList.add("box-invisivel");
		campSexo.classList.add("box-invisivel");
		inicio.classList.add("box-invisivel");


		btn_cadastrar.classList.remove("box-invisivel");
		box_cadastro_musical.classList.remove("box-invisivel");
		labels_cadastro_musical.classList.remove("box-invisivel");
		voltar.classList.remove("box-invisivel");


	}

}

function voltar(){

	var $=document.querySelector.bind(document);
	var msg = $("#mensagem");
	/*============ bax img clave de sol/voltar=========================*/
	var box_img_sol=$('.clave-sol-continuar');
	var voltar =$('.voltar');
	var inicio =$('.inicio');

	/*============ elementos box-cadastrar======================*/	
	var btn_continuar = $('.botao-continuar');
	var box_cadastro =$('.cadastro');
	var labels_cadastro=$('.labels-cadastro');

	/*============ elementos box-musical =======================*/
	var btn_cadastrar = $('.botao');
	var box_cadastro_musical=$('.cadastro-musical');
	var labels_cadastro_musical=$('.labels-cadastro-musical');

	event.preventDefault();

		btn_continuar.classList.remove("box-invisivel");
		box_cadastro.classList.remove("box-invisivel");
		labels_cadastro.classList.remove("box-invisivel");
		inicio.classList.remove("box-invisivel");


		btn_cadastrar.classList.add("box-invisivel");
		box_cadastro_musical.classList.add("box-invisivel");
		labels_cadastro_musical.classList.add("box-invisivel");
		voltar.classList.add("box-invisivel");

		box_cadastro.classList.add("animated");
		box_cadastro.classList.add("fadeInLeftBig");
		labels_cadastro.classList.add("animated");
		labels_cadastro.classList.add("fadeInLeftBig");
		

}
		

function cadastrar(){

		
/*============ elementos box-cadastrar======================
------------------------------------------------------------*/	
		var $=document.querySelector.bind(document);
		var campNome 		= $('#nome');
		var campSobrenome 	= $('#sobrenome');
		var campEmail 		= $("#email");
		var campSexo 		= $("#sexo");
		var campSenha 		= $('#senha');
		var campSenha2		= $('#confirma_senha');
		var campCargo 		= $('#cargo');
		var campInstrumento = $('#instrumento');
		var campClave	    = $('#clave');
		var campCidade 		= $('#cidade');
		var campComum 		= $('#comum');
		var msg 			= $("#mensagem");

/*============ valores========================================
-------------------------------------------------------------*/	
		var dados		=[];
		var nome 		= campNome.value;
		var sobrenome 	= campSobrenome.value;
		var email 		= campEmail.value;
		var sexo 		= campSexo.value;
		var senha 		= campSenha.value;
		var senha2 		= campSenha2.value;
		var cargo 		= campCargo.value;
		var instrumento = campInstrumento.value;
		var clave 		= campClave.value;
		var cidade 		= campCidade.value;
		var comum 		= campComum.value;
/*==========================================================*/
		
    	event.preventDefault();

    	if(!cargo || !instrumento || !clave || !cidade || !comum){

				padrao = 'campo';
				achouErro = mensagemErro(padrao);	
		}
 /*==========================================================
					EMPACOTANDO E ENVIANDO
 ============================================================*/		   
      		  	dados['nome'] 		 = nome;
		    	dados['sobrenome']   = sobrenome;
		    	dados['email'] 		 = email;
		    	dados['sexo'] 		 = sexo;
		    	dados['senha'] 		 = senha;
		    	dados['cargo'] 		 = cargo;
		    	dados['instrumento'] = instrumento;
		    	dados['clave'] 		 = clave;
		    	dados['cidade'] 	 = cidade;
		    	dados['comum'] 		 = comum;

     	     	/*_______________________*/
     	     	   Efetuacadastro(dados);  
      			/*-----------------------*/	


}

function Efetuacadastro(dados){

				var nome=		 dados['nome'];
		    	var sobrenome=	 dados['sobrenome'];
		    	var email=		 dados['email'];
		    	var sexo=		 dados['sexo'];
		    	var senha=		 dados['senha'];
		    	var cargo=		 dados['cargo'];
		    	var instrumento= dados['instrumento'];
		    	var clave=		 dados['clave'];
		    	var cidade=		 dados['cidade'];
		    	var comum=		 dados['comum'];

		    	let requisicao= 'cadastrar';

/*==================================================================================
				EMPACOTANDO E ENVIANDO PARA BD
 ===================================================================================*/	

			            $.ajax({
			              type: "POST",
			              url: "../controllers/UsuarioController.php",
			              data: {
			              	nome:nome,
			              	sobrenome:sobrenome,
			              	email:email,
			              	sexo:sexo,
			              	senha:senha,
			              	cargo:cargo,
			              	instrumento:instrumento,
			              	clave:clave,
			              	cidade:cidade,
			              	comum:comum,
			              	requisicao:requisicao},
			              cache: false,
			              beforeSend: function(){console.log('cadastrando...');},
			              success: function(data){
			    					
			              		let tudocerto = boxSucesso(); // Abrindo mensagem de sucesso ao cadastrar e recarregar pág.
				                   
			                  }
			          
			              });

}

function mensagemErro(elemento){

		let $= document.querySelector.bind(document);
		var msg =$('#mensagem');
		event.preventDefault();

/*==================================================================================
					Mensagems possíveis de erro
 ===================================================================================*/
		var padraoUm ='Por favor, preencha todos campos.';
		var senha ='As senha devem ser iquais';
		var senhaIncompleta ='A senha deve possuir de 7 a 14 caracteres.';

/*==================================================================================*/

					let erroX = 1; // erro para realizar verificação.
					
			      	let erro=setTimeout(function(){

			            msg.classList.add("erro-visivel");
			            if(elemento == 'campo'){
			            	msg.textContent = padraoUm;
			        	}
			        	if(elemento == 'senha'){
			            	msg.textContent = senha;
			        	}
			        	if(elemento == 'senhaIncompleta'){
			            	msg.textContent = senhaIncompleta;
			        	}

			       	},500);
			      	setTimeout(function(){       

			                    clearInterval(erro);
			                    msg.classList.remove("erro-visivel");
			                    msg.textContent='';
			                   
			             },10000);
			      	return erroX;
}


function boxSucesso(){

	var $ = document.querySelector.bind(document);
	var box_sucesso = $(".box-sucesso");
	var form = $("#form-cadastro");
	var labels_cadastro=$('.labels-cadastro');
	var labels_cadastro_musical=$('.labels-cadastro-musical');
	var msg = $("#mensagem");



				let sucesso=setTimeout(function(){

			            form.classList.add("box-invisivel");
						labels_cadastro.classList.add("box-invisivel");
						labels_cadastro_musical.classList.add("box-invisivel");
						box_sucesso.classList.remove("box-invisivel");

						box_sucesso.textContent = 'Cadastro realizado com sucesso, em alguns segundos você será'+
												'redirecionado.';

			       	},1000);
			      	setTimeout(function(){       

			      				window.location.reload();
			                    
			                   	
			                   	
			             },10000);



}