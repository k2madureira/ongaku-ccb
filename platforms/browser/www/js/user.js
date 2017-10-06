function lookuser(){
var resposta;

db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM usuario', [], function(rs){

				resposta = rs.rows.item(0).nome;
				return resposta;

		       Materialize.toast('User:'+resposta, 4000);
	});


}


function loadUser(){
var campNome = document.querySelector("#login-nome");
var campCargo = document.querySelector("#login-cargo");

db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
db.executeSql('SELECT * FROM usuario', [], function(rs){

			campNome.textContent = rs.rows.item(0).nome;
	        campCargo.textContent = rs.rows.item(0).cargo;



});

}
	

function logarUser(){

	var email = $("#email").val();
	var senha = $("#senha").val();
	var requisicao = 'login';
	var msg = document.querySelector("#li-erro");
	var btnFecha = document.querySelector(".btn-fecha-user ");

	$.ajax({
		type:"POST",
		dataType:'json',
		data:{email:email,senha:senha,requisicao:requisicao},
		url:"https://twoconeb.000webhostapp.com/projetos/ongakuCcb/bd/conexaoUser.php",
		cache:false,
		beforeSend: function(){console.log('logando...');},
		success:function(data){

			if(data == 'fail'){
					setTimeout(function(){
						msg.classList.add("red");
						msg.textContent='Email ou senha incorretos.';
			           

			       	},500);

			       	setTimeout(function(){
						msg.classList.remove("red");
						msg.textContent='';
			           

			       	},5000);



			}else{
				
				
				addUserLocal(data);
                btnFecha.click();

			}

			

		},
		error:function(jqXHR,exception){

				if(jqXHR.status == 0){

					setTimeout(function(){
						msg.classList.add("red");
						msg.textContent = 'Sem conexão!';

					},500);
					setTimeout(function(){
						msg.classList.remove("red");
						msg.textContent='';
					},4000);
				}
				if(jqXHR.status == 404){

					console.log('Página não encontrada [404]');

				}if(jqXHR.status == 105){

					setTimeout(function(){
						msg.classList.add("red");
						msg.textContent = 'Sem conexão!';

					},500);
					setTimeout(function(){
						msg.classList.remove("red");
						msg.textContent='';
					},4000);

				}

		}
	});


}

function desconectUser(){

	var btnDesconect= document.querySelector("#desconectUser");
	var formLogin = document.querySelector("#form-login");
	var msg = document.querySelector("#userCon");
	var campNome = document.querySelector("#login-nome");
    var campCargo = document.querySelector("#login-cargo");


	btnDesconect.classList.add("invisivel2");
	formLogin.classList.remove("invisivel");
	campNome.textContent  = '';
	campCargo.textContent = '';
	msg.textContent 	  = '';
	dropTable('usuario');
	

}



function cadastrarUser(){

		var achouErro = 0;
/*============ elementos box-cadastrar======================
------------------------------------------------------------*/	
		var $=document.querySelector.bind(document);
		var campNome 		= $('#nome');
		var campSobrenome 	= $('#sobrenome');
		var campEmail 		= $("#emailcadastro");
		var campSenha 		= $('#senhacadastro');
		var campSenha2		= $('#senha2');
		var campCargo 		= $('#cargo');
		var campCidade 		= $('#cidadecadastro');
		var campComum 		= $('#comum');
		var msg 			= $("#li-erro");

/*============ valores========================================
-------------------------------------------------------------*/	
		var dados		=[];
		var nome 		= campNome.value;
		var sobrenome 	= campSobrenome.value;
		var email 		= campEmail.value;
		var senha 		= campSenha.value;
		var senha2 		= campSenha2.value;
		var cargo 		= campCargo.value;
		var cidade 		= campCidade.value;
		var comum 		= campComum.value;
/*==========================================================*/
		
    	event.preventDefault();

    	if(!cargo || !cidade || !comum){

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


     	 if(achouErro==0){
 /*==========================================================
					EMPACOTANDO E ENVIANDO
 ============================================================*/		   
      		  	dados['nome'] 		 = nome;
		    	dados['sobrenome']   = sobrenome;
		    	dados['email'] 		 = email;	    
		    	dados['senha'] 		 = senha;
		    	dados['cargo'] 		 = cargo;
		    	dados['cidade'] 	 = cidade;
		    	dados['comum'] 		 = comum;

     	     	/*_______________________*/
     	     	   Efetuacadastro(dados);  
      			/*-----------------------*/	
		}

}

function Efetuacadastro(dados){

				var nome=		 dados['nome'];
		    	var sobrenome=	 dados['sobrenome'];
		    	var email=		 dados['email']; 	
		    	var senha=		 dados['senha'];
		    	var cargo=		 dados['cargo'];
		    	var cidade=		 dados['cidade'];
		    	var comum=		 dados['comum'];

		    	let requisicao= 'cadastrar';

/*==================================================================================
				EMPACOTANDO E ENVIANDO PARA BD
 ===================================================================================*/	

			            $.ajax({
			              type: "POST",
			              dataType:"json",
			              url: "https://twoconeb.000webhostapp.com/projetos/ongakuCcb/bd/conexaoUser.php",
			              data: {
			              	nome:nome,
			              	sobrenome:sobrenome,
			              	email:email,
			              	senha:senha,
			              	cargo:cargo,
			              	cidade:cidade,
			              	comum:comum,
			              	requisicao:requisicao},
			              cache: false,
			              beforeSend: function(){console.log('cadastrando...');},
			              success: function(data){
			    					

			    				if(data == 'fail'){

			    					let erro='email';
			    					mensagemErro(erro);
			    				
			    				}else{
			              			let tudocerto = boxSucesso(); // Abrindo mensagem de sucesso ao cadastrar e recarregar pág.
				                }   
			                  }
			          
			              });

}

function mensagemErro(elemento){

		event.preventDefault();event.preventDefault();
		let $= document.querySelector.bind(document);
		var msg =$('#li-erro');
		

/*==================================================================================
					Mensagems possíveis de erro
 ===================================================================================*/
		var padraoUm ='Por favor, preencha todos campos.';
		var senha ='As senhas devem ser iquais.';
		var senhaIncompleta ='A senha deve possuir de 7 a 14 caracteres.';
		var emailRepetido = 'Este email já está cadastrado.';

/*==================================================================================*/

					let erroX = 1; // erro para realizar verificação.
					
			      	let erro=setTimeout(function(){

			            msg.classList.add("erro-visivel");
			            if(elemento == 'campo'){
			            	msg.classList.add("red");
			            	msg.textContent = padraoUm;
			        	}
			        	if(elemento == 'senha'){
			        		msg.classList.add("red");
			            	msg.textContent = senha;
			        	}
			        	if(elemento == 'senhaIncompleta'){
			        		msg.classList.add("red");
			            	msg.textContent = senhaIncompleta;
			        	}
			        	if(elemento == 'email'){
			        		msg.classList.add("red");
			            	msg.textContent = emailRepetido;
			        	}

			       	},500);
			      	setTimeout(function(){       

			                    clearInterval(erro);
			                    msg.classList.remove("red");
			                    msg.textContent='';
			                   
			             },10000);
			      	return erroX;
}


function boxSucesso(){

	
	var msg = document.querySelector("#li-erro");
	var btnfechar = document.querySelector("#cancel-cadastro");


				let sucesso=setTimeout(function(){

			          msg.classList.remove("red");
			          msg.classList.remove("blue");
			          msg.textContent='Cadastro realizado com sucesso';

			       	},2000);
			      	setTimeout(function(){       

			                   msg.textContent='';
			                   btnfechar.click();  
			                   	
			                   	
			             },5000);



}