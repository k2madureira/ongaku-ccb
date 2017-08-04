
function escuta(){

	var permissao = '';
	var settings = { lang: "pt-BR",matches:1 ,showPopup: true }; 
	var Escuta = document.querySelector(".btn-fala");
	
	window.plugins.speechRecognition.isRecognitionAvailable(function(available){ 
		
		if(available){  
			//alert('dispositivo aceita esse plugin'); 
		}
	 }, function(err){ 
	 	
	 	Materialize.toast('este disitivo não suporta comandos de voz.', 4000); 
	 });


	window.plugins.speechRecognition.hasPermission(function (isGranted){ 
		if(isGranted){ 
			
			permissao = 'ok';
		}else{ 
		 	//alert("vamos pedir ao seu celular?");
		} 
	}, function(err){ 
		//alert("A permissão não é garantida");
	});

	if(permissao == 'ok'){
		window.plugins.speechRecognition.requestPermission(function (){ 
		   // alert("tudo ok boss");
		 }, function (err){ 
		 	//alert("desculpa boss, celular não permitiu!"); 
		 });
	}else{
		//alert("permissão não concedida");
	}

	window.plugins.speechRecognition.getSupportedLanguages(function(data){ 
		console.log(' download data lenguage done');
	
	}, function(err){ 
		console.log('fail download data');
	});

	
	window.plugins.speechRecognition.startListening(function(result){ 


		if(result == 'novo'){

			speechNovo(result);
			
		}
		if(result=='logar'){

			speechLogin(result);
			
		}
		if(result=='amigos'){

			speechAmigos(result);
			
		}
		if(result=='com fome'){

			speechFome(result);
			
		}
		
	}, function(err){ 
		
	}, settings);

}

function speechNovo(text){
	
	var eventos = document.querySelector("#voiceEventos");
	var plusbtn = document.querySelector("#cadastrar-evento");
	

	eventos.click();
	plusbtn.click();
	/*setTimeout(function(){
 		
 		plusbtn.click();
 		
	}, 3000 );*/

}
function speechLogar(text){
	Materialize.toast('logar onde?', 2000); 
}
function speechAmigos(text){
	var navAmigos= document.querySelector("#voiceAmigos");

	navAmigos.click();

	Materialize.toast('é uma piada?', 2000); 
}

function speechFome(text){
	Materialize.toast('E a novidade?', 2000); 
}

