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
     
 		
	
	 $("#navEventos").click(function(){
	 	updateDiv();
	 	
	 	
	 });

	 $("#btnSalvar").click(function(){

	 	var home =document.querySelector("#navHome");
		
	 	home.click();
	 	
	 	Materialize.toast('Ensaio adicionado', 4000);
	 });

	 $("#icon-help-box").click(function(){
	 	
	 	var div = document.querySelector("#helpbox");
		div.classList.remove("invisivel");


	 });
	
	

 });



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
 	}

 	liPart2.classList.remove('disabled');
 	liPart1.classList.add('disabled');
 	lia1.classList.remove('active');
 	lia2.classList.add('active');

 	lia2.click();


 }

 function cadastrar(){
 	event.preventDefault();

 	var data = $('#data').val();
 	var horas=$('#horario').val();
 	var minutos=$('#minutos').val();
 	var meses= ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

 	var rgxMes = /[A-z][a-z]{1,8}/;
 	var rgxDia = /\d{2}/;
 	var rgxAno = /\d{4}/;

 	var vetDia = rgxDia.exec(data);
 	var vetMes = rgxMes.exec(data);
 	var vetAno = rgxAno.exec(data);

 	var Dia = String(vetDia);
 	var Smes = String(vetMes[0]);
 	var Ano = String(vetAno[0]);

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
 	}else{
 		msg.textContent = 'Algo deu errado mestre';
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

 