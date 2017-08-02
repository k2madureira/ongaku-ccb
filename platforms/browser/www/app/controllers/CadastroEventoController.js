function cadastrar(){

	event.preventDefault();
	var $ = document.querySelector.bind(document);

	var campLat 	= $("#lat");
	var campLnt 	= $("#lnt");
	var campTipo    = $("#ensaio");
	var campCidade  = $("#cidade");
	var campBairro  = $("#bairro");
	var campHorario = $("#horario");
	var campData 	= $("#data");

	var dados = [];
	var latitude  = campLat.value;
	var longitude = campLnt.value;
	var tipo 	  = campTipo.value;
	var cidade 	  = campCidade.value;
	var bairro 	  = campBairro.value;
	var horas 	  = campHorario.value;
	var data 	  = campData.value;



	if(!cidade || !bairro || !horas || !data){

				var padrao = 'campo';
				var achouErro = mensagemErro(padrao);

	}else{

/*==========================================================
					EMPACOTANDO E ENVIANDO
 ============================================================*/		   
      		  	dados['latitude'] 	= latitude;
		    	dados['longitude']  = longitude;
		    	dados['tipo'] 		= tipo;
		    	dados['cidade'] 	= cidade;
		    	dados['bairro'] 	= bairro;
		    	dados['horas'] 		= horas;
		    	dados['data'] 		= data;
		    	

     	     	/*_______________________*/
     	     	   Efetuacadastro(dados);  
      			/*-----------------------*/	

	}

}
function Efetuacadastro(dados){

				var latitude=	 dados['latitude'];
		    	var longitude=	 dados['longitude'];
		    	var tipo=		 dados['tipo'];
		    	var cidade=		 dados['cidade'];
		    	var bairro=		 dados['bairro'];
		    	var horas=		 dados['horas'];
		    	var data= 		 dados['data'];
		    	

		    	let requisicao= 'cadastrar';

/*==================================================================================
				EMPACOTANDO E ENVIANDO PARA BD
 ===================================================================================*/	

			            $.ajax({
			              type: "POST",
			              url: "../controllers/EventoController.php",
			              data: {
			              	latitude:latitude,
			              	longitude:longitude,
			              	tipo:tipo,
			              	cidade:cidade,
			              	bairro:bairro,
			              	horas:horas,
			              	data:data,
			              	requisicao:requisicao},
			              cache: false,
			              beforeSend: function(){console.log('cadastrando...');},
			              success: function(data){
			    					
			              		//let tudocerto = boxSucesso(); // Abrindo mensagem de sucesso ao cadastrar e recarregar pág.
				                   
			                  }
			          
			              });

}

function mensagemErro(elemento){

		let $= document.querySelector.bind(document);
		var msg =$('#msg2');
		

/*==================================================================================
					Mensagems possíveis de erro
 ===================================================================================*/
		var padraoUm ='Por favor, preencha todos campos.';
		var senha ='As senha devem ser iquais';
		var senhaIncompleta ='A senha deve possuir de 7 a 14 caracteres.';

/*==================================================================================*/

					let erroX = 1; // erro para realizar verificação.
					
			      	let erro=setTimeout(function(){

			            msg.classList.remove("box-invisivel");
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
			                    msg.classList.add("box-invisivel");
			                    msg.textContent='';
			                   
			             },10000);
			      	return erroX;
}
