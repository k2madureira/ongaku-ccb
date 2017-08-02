<?php
	session_start();
	include('../models/Evento.php');
	include_once('../bd/ConexaoEvento.php');
	
	$requisicao=	$_POST['requisicao'];


	switch($requisicao){


/*==========================================================
		->	INSERT.
 ============================================================*/				

		case "cadastrar":

			$latitude = 	$_POST['latitude'];
			$longitude = 	$_POST['longitude'];
			$tipo = 		$_POST['tipo'];
			$cidade = 		$_POST['cidade'];
			$bairro = 		$_POST['bairro'];
			$horario = 		$_POST['horas'];
			$data = 		$_POST['data'];

			$data = [];
			$data['idusuario']   = $_SESSION['id'];
			$data['tipo'] 		 = $tipo;
			$data['cidade'] 	 = $cidade;
			$data['bairro'] 	 = $bairro;
			$data['horario'] 	 = $horario;
			$data['data'] 		 = $data;
			$data['latitude'] 	 = $latitude;
			$data['longitude'] 	 = $longitude;


			

			//$user = new Evento($data);
			
	/*------------------------------------------------------
						Cortando img
	--------------------------------------------------------*/	
			//$crop = Crop($img, $x, $y, $w, $h);	

/*==========================================================
		->	UPDATE.
 ============================================================*/	
			

			break;

		case "editar":

			$nome = 		$_POST['nome'];

			break;
/*==========================================================
		->	DELETE.
 ============================================================*/				

		case "deletar":

			$nome = 		$_POST['nome'];

			break;	

		default:
			return 0;			
	}	


			/*	$_SESSION['login_usuario'] 	 = $email;
				$_SESSION['id']				 = $id_usuario;
				$_SESSION['nome'] 			 = $nome;
				$_SESSION['sobrenome'] 		 = $sobrenome;
				$_SESSION['email'] 			 = $email;
				$_SESSION['cargo'] 			 = $cargo;
				$_SESSION['instrumento'] 	 = $instrumento;
				$_SESSION['clave'] 			 = $clave;
				$_SESSION['cidade'] 		 = $cidade;
				$_SESSION['comum'] 			 = $comum;
				$_SESSION['img']			 = $img;*/

?>