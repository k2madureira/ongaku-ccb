var liPart1 = document.querySelector("#li1");
var liPart2 = document.querySelector("#li2");
var lia1    = document.querySelector("#opcao1");
var lia2    = document.querySelector("#opcao2");
var btncancelar = document.querySelector(".btn-cancelar");

var tipoEnsaio;
var cidade;
var bairro;



 $( document ).ready(function() {

 		var data = new Date();
 		var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
 		var dia_Extenso = dias[data.getDay()];
 		var dia = data.getDate();
 		var mes = data.getMonth() + 1;
 		var ano = data.getFullYear();

 		var campDia = document.querySelector(".dia");
 		var campMA = document.querySelector(".mesAno"); //mes e ano
 		var campDE = document.querySelector(".diaExtenso"); // Dia extenso

 		campDia.textContent = dia;
 		campMA.textContent  = mes+'/'+ano;
 		campDE.textContent	= dia_Extenso;
	/*
	 $('#enviar').on('click',function(){
         $('#visualizar').html('<img src="ajax-loader.gif" alt="Enviando..."/> Enviando...');
        // Efetua o Upload sem dar refresh na pagina           
        $('#formulario').ajaxForm({
            target:'#visualizar' // o callback será no elemento com o id #visualizar
         }).submit();
     });*/

 	
	//loadHome();

	 $("#navEventos").click(function(){
	 	updateDiv();
	 	
	 	
	 });
/*
	 $("#btnSalvar").click(function(){

	 	var home =document.querySelector("#navHome");
		
	 	home.click();
	 	
	 	Materialize.toast('Ensaio adicionado', 4000);
	 });*/

	 $("#icon-help-box").click(function(){
	 	
	 	var div = document.querySelector("#helpbox");
		div.classList.remove("invisivel");


	 });

	 $("#login-conexao").click(function(){

	 	 testaConexao();
	 	 loadUser();

	 });

	 $("#logarUser").click(function(){
	 	logarUser();
	 });

	$("#cadastrese").click(function(){


		var formLogin = document.querySelector("#form-login");
		var formCadastro = document.querySelector("#form-cadastro");
		
		formLogin.classList.add("invisivel");
		formCadastro.classList.remove("invisivel");

		
	});

	$("#cancelar-cadastro").click(function(){

		var formLogin = document.querySelector("#form-login");
		var formCadastro = document.querySelector("#form-cadastro");
		
		formLogin.classList.remove("invisivel");
		formCadastro.classList.add("invisivel");

		$("#nome").val('');
		$("#sobrenome").val('');
		$("#emailcadastro").val('');
		$("#senhacadastro").val('');
		$("#senha2").val('');
		$("#cidadecadastro").val('');
		$("#comum").val('');
		$("#cargo").val('');

	});

	$("#cadastrarUser").click(function(){

		cadastrarUser();

	});

	$("#escolhaWallpaper").click(function(){
		
		var loginButton = document.querySelector(".iconMenu-contorno");
		var home =document.querySelector("#navHome");
		var wallpaper=document.querySelector("#img-wallpaper");
		var svgmic = document.querySelector("#svgmic");
		var homeWallpaper = $("#selectWallpaper").val();
		let update = updateWallpaper(homeWallpaper);

		
			let load =document.querySelector("#carregando-wallpaper");

			home.click();
			wallpaper.classList.add("invisivel");
			svgmic.classList.add("invisivel2");
			loginButton.classList.add("invisivel2");
			load.classList.remove("invisivel");
			loadWallpaper();
			$(".home-wallpaper").load(window.location.href + ".home-wallpaper" );
			
			setTimeout(function(){
				load.classList.add("invisivel");
				wallpaper.classList.remove("invisivel");
				svgmic.classList.remove("invisivel2");
				loginButton.classList.remove("invisivel2");
			},2000);
			
		
	});
	

 });

 function loadHome(){

 		var loginButton = document.querySelector(".iconMenu-contorno");
		var home =document.querySelector("#navHome");
		var wallpaper=document.querySelector("#img-wallpaper");
		var svgmic = document.querySelector("#svgmic");
		var homeWallpaper = $("#selectWallpaper").val();
		let update = updateWallpaper(homeWallpaper);

		
			let load =document.querySelector("#carregando-wallpaper");

			home.click();
			wallpaper.classList.add("invisivel");
			svgmic.classList.add("invisivel2");
			loginButton.classList.add("invisivel2");
			load.classList.remove("invisivel");
			loadWallpaper();
			$(".home-wallpaper").load(window.location.href + ".home-wallpaper" );
			
			setTimeout(function(){
				load.classList.add("invisivel");
				wallpaper.classList.remove("invisivel");
				svgmic.classList.remove("invisivel2");
				loginButton.classList.remove("invisivel2");
			},2000);
			
			
 }

 function updateDiv() { 

 	var ul = document.querySelector("#colecao-eventos");
 	var infobox = document.querySelector("#infobox");
 	var load = document.querySelector("#carregando");
 	//$("#colecao-eventos").load(window.location.href + " #colecao-eventos" );

 	infobox.classList.add("invisivel");
 	load.classList.remove("invisivel");
 	$("#colecao-eventos").html("");

 	setTimeout(function(){
 		
 		load.classList.add("invisivel");
 		addEnsaios();
 		
	}, 2000 );


	//$("#colecao-eventos").html(""); 
 	
 } 



 function continuar(){



 	event.preventDefault();

 	tipoEnsaio = $('#tipoEnsaio').val();
 	cidade = $('#cidade').val();
 	bairro = $('#bairro').val();



 	if(!tipoEnsaio){
 		 Materialize.toast('Escolheu o tipo de ensaio ?', 5000);
 	}else{

 	liPart2.classList.remove('disabled');
 	liPart1.classList.add('disabled');
 	lia1.classList.remove('active');
 	lia2.classList.add('active');

 	lia2.click();
   }

 }

 function cadastrar(){
 	event.preventDefault();

 	var home =document.querySelector("#navHome");
 	var data = $('#data').val();
 	var horas=$('#horario').val();
 	var minutos=$('#minutos').val();
 	var meses= ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];


 	if(!data){
 		Materialize.toast('Qual a data do ensaio ?', 5000);
 	}


 	var rgxMes = /[A-z][a-z]{1,8}/;
 	var rgxDia = /\d{2}/;
 	var rgxAno = /\d{4}/;

 	var vetDia = rgxDia.exec(data);
 	var vetMes = rgxMes.exec(data);
 	var vetAno = rgxAno.exec(data);

 	var Dia = String(vetDia);
 	var Smes = String(vetMes[0]);
 	var Ano = String(vetAno[0]);

 	

     if(!horas || !minutos){
 		Materialize.toast('Preencha todos os campos.', 5000);
 	}if(minutos.length>3){
 		Materialize.toast('Utilize no campo minutos números entre 0 a 59.', 5000);
 	}if(horas.length>3){
 		Materialize.toast('Utilize no campo horas números entre 0-23', 5000);
 	}else{

 			for(let i=0;i<12;i++){

 		if(Smes == meses[i]){
 			if(i==0){ 
 			  var Mes = String('0'+(i+1));	
 			}
 			if(i<=10){
 			  var Mes = String('0'+i);
 			}else{
 			  var Mes = String(i);
 			}
 		}

 	}

 	var fullData = Dia+'/'+Mes+'/'+Ano;
 	var fullHorario = horas+'h:'+minutos+'m';

 	var inserir = add(tipoEnsaio,cidade,bairro,fullData,fullHorario,0,0);
 	
 	if(inserir=='ok'){

 		btncancelar.click();
	 	home.click();
	 	Materialize.toast('Ensaio adicionado', 4000);


 	}else{
 		msg.textContent = 'Algo deu errado!';
 	}


 	}

 	
 }

 function cancelar(){

 	event.preventDefault();

 	$('#data').val('');
 	$('#horario').val('');
 	$('#minutos').val('');
 	$('#tipoEnsaio').val('');
 	$('#cidade').val('');
 	$('#bairro').val('');

 	liPart2.classList.add('disabled');
 	liPart1.classList.remove('disabled');
 	lia1.classList.add('active');
 	lia2.classList.remove('active');
 	lia1.click();


 }
 function fecharinfo(){
 	var infobox = document.querySelector("#infobox");

 	infobox.classList.add("invisivel");

 }
 function fecharhelp(){
 	var helpbox = document.querySelector("#helpbox");

 	helpbox.classList.add("invisivel");

 }

 function limpa(){

 	document.getElementById("msg").innerHTML = '';

 }

 function addEnsaios(){


   montaEventos();


 }

 function testaConexao(){
 	var pacote = 'ok';
 	
 	var x = 'ola';

 	$.ajax({
			type:"POST",
			dataType: "json",
			data:{pacote:pacote},
			url:"https://twoconeb.000webhostapp.com/projetos/ongakuCcb/bd/testaConexao.php",
			success:function(data){
				
				if(data){
					
					msgConexao(data);

				}
				
			}
		});
 	
 }
function msgConexao(resposta){

	var campResposta = document.querySelector("#resposta-server");
	var liResposta = document.querySelector("#li-resposta");
	var iconConexao = document.querySelector("#iconConexao");

	            if(resposta == 'ok'){
					
					//liResposta.classList.add("green");
					iconConexao.classList.add("conexaon");

				}else{
					
					//liResposta.classList.add("red");
					iconConexao.classList.add("conexaoff");

				}

}
