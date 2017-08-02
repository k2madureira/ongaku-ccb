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

	 $("#navEventos").click(function(){
	 	
	 	addEnsaios();
	 	updateDiv();

	 });

	 $("#btnSalvar").click(function(){

	 	var home =document.querySelector("#navHome");

	 	home.click();
	 	  Materialize.toast('Ensaio adicionado', 4000);
	 });


	
 		

 });
 function updateDiv() { 
 	$( "#colecao-eventos" ).load(window.location.href + " #colecao-eventos" ); 
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


 	var rgxMes = /[A-z][a-z]{1,8}/;
 	var rgxDia = /\d{2}/;
 	var rgxAno = /\d{4}/;

 	var vetDia = rgxDia.exec(data);
 	var vetMes = rgxMes.exec(data);
 	var vetAno = rgxAno.exec(data);

 	var Dia = String(vetDia);
 	var Mes = String(vetMes[0]);
 	var Ano = String(vetAno[0]);

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

 function limpa(){

 	document.getElementById("msg").innerHTML = '';
 }

 function addEnsaios(){


   montaEventos();


 }

 function montaLi(ensaio){

 	

 	var li = document.createElement("li");
 	li.classList.add("collection-item");

 	var div = document.createElement("div");
 	div.classList.add("card", "horizontal" ,"z-depth-3");

 	div.appendChild(Div1_1(ensaio.tipo));
 	div.appendChild(Div1_2(ensaio));

 	li.appendChild(div);
 	return li;

 }
 
 function Div1_1(tipo){

 	

 	var div = document.createElement("div");
 	div.classList.add("card-image");

 	var img = document.createElement("img");
 	
 	var strTipo = String(tipo);


 	if(strTipo == 'tecnico'){
 		img.src = 'img/avatar.png';
 	}
 	if(strTipo == 'local'){
 		img.src = 'img/avatar.png';
 	}
 	if(strTipo == 'regional'){
 		img.src = 'img/avatar.png';
 	}
 	
 	div.appendChild(img);

 	return div;

 }
 function Div1_2(ensaio){

 	

 	var div = document.createElement("div");
 	div.classList.add("card-stacked");

 	div.appendChild(Div1_2_1(ensaio));
 	div.appendChild(Div1_2_2(ensaio));

 	return div;

 }
 function Div1_2_1(ensaio){

 	

 	let idensaio = String(ensaio.idensaio);
 	let data = String(ensaio.data);
 	let cidade = String(ensaio.cidade);
 	let bairro = String(ensaio.bairro);


 	var div = document.createElement("div");
 	div.classList.add("card-content");

 	var p1 = document.createElement("p");
 	p1.classList.add("pcard");
 	p1.style = 'display: none;';
 	p1.textContent = idensaio;

 	var p2 = document.createElement("p");
 	p2.classList.add("pcard");
 	p2.style = '';
 	p2.textContent='Loca:'+cidade+' ('+bairro+')';

 	var p3 = document.createElement("p");
 	p3.classList.add("pcard");
 	p3.style = '';
 	p3.textContent='Data: '+data;

 	div.appendChild(p1);
 	div.appendChild(p2);
 	div.appendChild(p3);

 	return div;

 }
  function Div1_2_2(ensaio){

  	var div = document.createElement("div");
  	div.classList.add("card-action");

  	var a = document.createElement("a");
  	a.classList.add("item-color");
  	a.id='info-ensaio';
  	a.textContent='Informações';

  	div.appendChild(a);
  	return div;

 }