  
var db; //variavel para banco de dados
//===================================================================================================


   $( document ).ready(function() {

 		$('.tabs').tabs({swipeable: false}); // Para ativar a rolagem entre telas basta alterar apra  'true'
 		$('.modal').modal();
        $('.tap-target').tapTarget('open'); // opções abir e fechar do modal
        $('.tap-target').tapTarget('close');
        $('select').material_select(); // ativando select do form
        $(".button-collapse").sideNav();//Side menu
        $('.tooltipped').tooltip({delay: 50});

        $('.datepicker').pickadate({
            selectMonths: true, // cria o dropdown de controle de meses
            selectYears: 15, // cria um dropdown de 15 anos,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
          });

        $('.button-collapse').sideNav({
          menuWidth: 250, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true, // Choose whether you can drag to open on touch screens,
          onOpen: function(el) {}
        
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
        'CREATE TABLE IF NOT EXISTS login (idlogin INTEGER PRIMARY KEY AUTOINCREMENT, login INTEGER)'
  
      );

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS config (idconfig INTEGER PRIMARY KEY AUTOINCREMENT, wallpaper TEXT NOT NULL, clave TEXT NOT NULL)'
  
      );


      db.executeSql(
        'CREATE TABLE IF NOT EXISTS usuario (iduser INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, cargo TEXT NOT NULL, foto TEXT NOT NULL)'
  
      );


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


    
