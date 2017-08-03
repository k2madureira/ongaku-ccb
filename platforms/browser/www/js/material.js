  
var db; //variavel para banco de dados
//===================================================================================================


   $( document ).ready(function() {

 		$('.tabs').tabs({swipeable: false}); // Para ativar a rolagem entre telas basta alterar apra  'true'
 		$('.modal').modal();
        $('.tap-target').tapTarget('open'); // opções abir e fechar do modal
        $('.tap-target').tapTarget('close');
        $('select').material_select(); // ativando select do form
        

        $('.datepicker').pickadate({
            selectMonths: true, // cria o dropdown de controle de meses
            selectYears: 15, // cria um dropdown de 15 anos,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
          });
 		
      

	});

//===================================================================================================
   function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

   
//===================================================================================================
    function onDeviceReady() {

       // addEnsaios();

    	db = window.sqlitePlugin.openDatabase({name: 'DB', location: 'default'});
    		
    	db.executeSql(
		    'CREATE TABLE IF NOT EXISTS ensaios (idensaio INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT NOT NULL, cidade TEXT NOT NULL, bairro TEXT NOT NULL, data TEXT NOT NULL, horario TEXT NOT NULL, tmusicos INTEGER, torganistas INTEGER)'
	
		  );
    	
  		  
		   

        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);
        document.addEventListener("menubutton", onMenuKeyDown, false);



    }

    // Handle the pause event
//===================================================================================================

    function onPause() {

    }

    // Handle the resume event
//===================================================================================================

    function onResume() {
    }

    // Handle the menu button
//===================================================================================================

    function onMenuKeyDown() {
    }


    
