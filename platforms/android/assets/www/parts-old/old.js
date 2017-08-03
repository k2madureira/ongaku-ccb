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
  	a.id='infoEnsaio';
  	a.textContent='Informações';
  	
  	div.appendChild(a);
  	return div;

 }