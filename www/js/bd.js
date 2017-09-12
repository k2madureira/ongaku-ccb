
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

function addUserLocal(data){


db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
var idusuario = data.idusuario;
var nome = String(data.nome);
var email = String(data.email);
var cargo = String(data.cargo);



db.executeSql('SELECT * FROM usuario', [], function(rs){

	
   
	if(rs.rows.length==0){

     
     db.executeSql('INSERT INTO usuario (idusuario, nome, email, cargo) VALUES (?,?,?,?)', [idusuario, nome, email, cargo]);
     


	}else{

		
	}
   

	
});


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
	var inverso = [];
	
	
	

	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM ensaios', [], function(rs){
		
		var aux =rs.rows.length-1;
		for(var i =0; i<rs.rows.length; i++){
					
			inverso[i] = aux;
			aux -=1;	
		}


		for(var i =0; i<rs.rows.length; i++){
			text += 'key:'+i+" Id:"+rs.rows.item(inverso[i]).idensaio+" "+"Cidade: "+rs.rows.item(inverso[i]).cidade+"<br> ";
			
		}
				
		text += "Quantidade de eventos: "+rs.rows.length+"<br>";
		document.getElementById("msg").innerHTML = text;


	});

	


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

//======================================================================================
function dropTable(tbnome){
	 db.executeSql('DROP TABLE IF EXISTS '+ tbnome);
	 criaTable(tbnome);
	 

}
//======================================================================================
function criaTable(tipo){

		db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
		
     if(tipo=='ensaios'){	
    	db.executeSql(
		    'CREATE TABLE IF NOT EXISTS ensaios (idensaio INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT NOT NULL, cidade TEXT NOT NULL, bairro TEXT NOT NULL, data TEXT NOT NULL, horario TEXT NOT NULL, tmusicos INTEGER, torganistas INTEGER)'
	
		  );
    }

	  if(tipo == 'usuario'){	  
       db.executeSql(
        'CREATE TABLE IF NOT EXISTS usuario (iduser INTEGER PRIMARY KEY AUTOINCREMENT, idusuario INTEGER NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL, cargo TEXT NOT NULL, foto TEXT)'
  
      );
     }
		
  
    	   
    	
}

//======================================================================================

function montaEventos(){

	var ul = document.querySelector("#colecao-eventos");
	var li = '';
	var inverso = [];


	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM ensaios', [], function(rs){

		/*____________________________________________________
					Criando contagem com decremento
		______________________________________________________*/
		var aux =rs.rows.length-1;
		for(var i =0; i<rs.rows.length; i++){
					
			inverso[i] = aux;
			aux -=1;	
		}
		//______________________________________________________

		for(let i =0; i< rs.rows.length; i++){
		   
		   //li = montaLi(rs.rows.item(i));
		   //ul.appendChild(li);

		   var strTipo = String(rs.rows.item(inverso[i]).tipo);


			 	if(strTipo == 'tecnico'){
			 		var img = 'img/wallpaper3.jpg';
			 	}
			 	if(strTipo == 'local'){
			 		var img = 'img/wallpaper1.jpg';
			 	}
			 	if(strTipo == 'regional'){
			 		var img = 'img/wallpaper2.jpg';
			 	}

		   $("#colecao-eventos").append('<li class="collection-item-evento">'+
		   								'<div class="card horizontal z-depth-3">' +
		   								'<div class="card-image"> '+
		   								' <img src="'+img+'">'+
		   								'</div>'+
		   								'<div class="card-stacked">'+
		   								'<div class="card-content">'+
		   								'<p class="" id="idensaio" style="display: none;">'+rs.rows.item(inverso[i]).idensaio+'</p>'+
		   								'<p class="" id="local">'+'Tipo: '+rs.rows.item(inverso[i]).tipo+'</br>'+' Cidade: '+rs.rows.item(inverso[i]).cidade+'</p>'+
		   								'<p class="" id="data">Dia:'+rs.rows.item(inverso[i]).data+'</p>'+
		   								'</div>'+
		   								' <div class="card-action">'+
		   								'<a class= "item-color" id="info-ensaio" onclick="showboxinfo('+rs.rows.item(inverso[i]).idensaio+');">Informações</a>'+
		   								'</div>'+
		   								'</div>'+
		   								' </div>'+
		   								'</li>'
		   								);
	   }

	});


}
//======================================================================================
function showboxinfo(id){

	var div = document.querySelector("#infobox");
	div.classList.remove("invisivel");
	

	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM ensaios', [], function(rs){

		for(let i =0; i< rs.rows.length; i++){

			if(rs.rows.item(i).idensaio == id){
				$("#infoti").html(String(rs.rows.item(i).tipo));
				$("#infoci").html(String(rs.rows.item(i).cidade));
				$("#infoba").html(String(rs.rows.item(i).bairro));
				$("#infoda").html(String(rs.rows.item(i).data));
				$("#infoho").html(String(rs.rows.item(i).horario));	
				
			}
		}

	});

	
	
}
//======================================================================================
function loadWallpaper(){

	var wallpaper = document.querySelector("#img-wallpaper");


	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
	db.executeSql('SELECT * FROM config', [], function(rs){

		wallpaper.src = String(rs.rows.item(0).wallpaper);



	});
}
//======================================================================================
function updateWallpaper(wallpaper){

  db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
   
   db.transaction(function (tx) {

        var query = "UPDATE config SET wallpaper = ? WHERE idconfig = ?";

        tx.executeSql(query, [wallpaper, 1], function(tx, res) {
        	var msg = 'ok';
            
        },
        function(tx, error) {
            //alert('UPDATE error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });



}
//======================================================================================
function closeDB() {
    db.close(function () {
        console.log("DB closed!");
    }, function (error) {
        console.log("Error closing DB:" + error.message);
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