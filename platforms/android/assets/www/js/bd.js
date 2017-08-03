
/*=========================================================================================
				*funções de BD Local usando plugin SQLite
//=========================================================================================*/


var db;
/*db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});*/
var data = []; // pacote de ensaios


//======================================================================================
function add(tipo,cidade,bairro,data,horario,tmusicos,torganistas){
	


db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});

db.executeSql('INSERT INTO ensaios (tipo, cidade, bairro, data, horario, tmusicos, torganistas) VALUES (?,?,?,?,?,?,?)', [tipo, cidade, bairro, data, horario, tmusicos, torganistas]);


return 'ok';


}
//======================================================================================
function editar(pacote,id){

}
//======================================================================================
function deletar(id){

}
//======================================================================================
function showTable(){
	
	var ensaio = [];
	var text ='';
	
	

	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM ensaios', [], function(rs){
		

		for(let i =0; i< rs.rows.length; i++){
			text += "Id:"+rs.rows.item(i).idensaio+" "+"Cidade: "+rs.rows.item(i).cidade+"<br> ";
			
		}
				

		/*text += "Id:"+rs.rows.item(0).idensaio+" "+"Cidade: "+rs.rows.item(0).cidade+"<br> ";
		text += "Id:"+rs.rows.item(1).idensaio+" "+"Cidade: "+rs.rows.item(1).cidade+"<br> ";
		text += "Id:"+rs.rows.item(2).idensaio+" "+"Cidade: "+rs.rows.item(2).cidade+"<br> ";*/
		text += "Quantidade de eventos: "+rs.rows.length+"<br>";
		document.getElementById("msg").innerHTML = text;


	});


}
//======================================================================================
function dropTable(tbnome){
	 db.executeSql('DROP TABLE IF EXISTS '+ tbnome);
	 criaTable();
	 

}


//======================================================================================
function buscaEventos(){

	db.executeSql('SELECT * FROM eventos', [], function(rs){
		for(var i =0; i<rs.rows.length; i++){	    

		   ensaio['id'] 		 = String(rs.rows.item(i).idensaio);
		   ensaio['tipo'] 	 	 = String(rs.rows.item(i).tipo);
		   ensaio['cidade'] 	 = String(rs.rows.item(i).cidade);
		   ensaio['bairro'] 	 = String(rs.rows.item(i).bairro);
		   ensaio['data'] 		 = String(rs.rows.item(i).data);
		   ensaio['horario'] 	 = String(rs.rows.item(i).horario);
		   ensaio['tmusicos'] 	 = String(rs.rows.item(i).tmusicos);
		   ensaio['torganistas'] = String(rs.rows.item(i).torganistas);

		   data[i]=ensaio;


		}
		return data;

		   });



}

function criaTable(){

		db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
    		
    	db.executeSql(
		    'CREATE TABLE IF NOT EXISTS ensaios (idensaio INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT NOT NULL, cidade TEXT NOT NULL, bairro TEXT NOT NULL, data TEXT NOT NULL, horario TEXT NOT NULL, tmusicos INTEGER, torganistas INTEGER)'
	
		  );
    	
}



function montaEventos(){

	var ul = document.querySelector("#colecao-eventos");
	var li = '';
	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM ensaios', [], function(rs){
		

		for(let i =0; i< rs.rows.length; i++){
		   
		   //li = montaLi(rs.rows.item(i));
		   //ul.appendChild(li);

		   var strTipo = String(rs.rows.item(i).tipo);


			 	if(strTipo == 'tecnico'){
			 		var img = 'img/clave-sol.png';
			 	}
			 	if(strTipo == 'local'){
			 		var img = 'img/wallpaper.jpg';
			 	}
			 	if(strTipo == 'regional'){
			 		var img = 'img/avatar.png';
			 	}

		   $("#colecao-eventos").append('<div class="card horizontal z-depth-3">' +
		   								'<div class="card-image"> '+
		   								' <img src="'+img+'">'+
		   								'</div>'+
		   								'<div class="card-stacked">'+
		   								' <div class="card-content">'+
		   								'<p class="" id="idensaio" style="display: none;">'+rs.rows.item(i).idensaio+'</p>'+
		   								'<p class="" id="local">'+'Cidade: '+rs.rows.item(i).cidade+'</br>'+' Bairro:'+rs.rows.item(i).bairro+'</p>'+
		   								'<p class="" id="data">Dia:'+rs.rows.item(i).data+'</p>'+
		   								'</div>'+
		   								' <div class="card-action">'+
		   								'<a class= "item-color" id="info-ensaio" onclick="showboxinfo('+rs.rows.item(i).idensaio+');">Informações</a>'+
		   								'</div>'+
		   								'</div>'+
		   								' </div>'+
		   								'</li>'
		   								);
	   }

	});


}

function showboxinfo(id){

	var div = document.querySelector("#infobox");
	div.classList.remove("invisivel");
	

	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM ensaios', [], function(rs){

		for(let i =0; i< rs.rows.length; i++){

			if(rs.rows.item(i).idensaio == id){
				$("#infoci").html(String(rs.rows.item(i).cidade));
				$("#infoba").html(String(rs.rows.item(i).bairro));
				$("#infoda").html(String(rs.rows.item(i).data));
				$("#infoho").html(String(rs.rows.item(i).horario));	
				
			}
		}

	});

	

	
}
 
//=======================================DESTROÇOS=======================================

//db.executeSql('DROP TABLE IF EXISTS ensaios');
  		  //db.executeSql('DROP TABLE IF EXISTS testa');		
		  //db.executeSql('CREATE TABLE IF NOT EXISTS testa (id, nome , email)');
		  //db.executeSql('INSERT INTO ensaios (tipo, cidade, bairro, data, horario, tmusicos, torganistas) VALUES (?,?,?,?,?,?,?)', ['local', 'catu', 'centro', '07/17', '19h', 5, 2]); //a maior mudança foi aqui
		  /*db.executeSql('SELECT * FROM ensaios', [], function(rs){
				
			    campMsg.textContent ='Id:'+rs.rows.item(0).idensaio+"</br>"+'Tipo: '+rs.rows.item(0).tipo+"</br>"+'Cidade: '+rs.rows.item(0).cidade+"</br>"+rs.rows.item(0).bairro+"</br>"+rs.rows.item(0).data+"</br>"+rs.rows.item(0).horario+'</br>'+rs.rows.item(0).tmusicos+'</br>'+rs.rows.item(0).torganistas+'';
		   });*/

		   //db.executeSql('INSERT INTO ensaios (tipo, cidade, bairro, data, horario, tmusicos, torganistas) VALUES (?,?,?,?,?,?,?)', [tipo, cidade, bairro, data, horario, tmusicos, torganistas])