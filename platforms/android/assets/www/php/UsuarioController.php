<?php
	session_start();
	include('Usuario.php');
	include_once('ConexaoUsuario.php');
	//include_once('../helpers/Crop.php');

	
	$requisicao=	$_POST['requisicao'];


	switch($requisicao){

/*==========================================================
		->	LOGIN.
 ============================================================*/			
		
 		case "email":


 		break;

		case "login":

			$tipoId = 'id';
			$tipo_Id_Email  = 'idEmail'; 
			$tipo_Id_Senha  = 'idSenha';
			$tipoEmail='email';	
			$tipoNome='nome';
			$tipoSobrenome = 'sobrenome'; 
			$tipoCargo ='cargo';
			$tipoCidade = 'cidade';
			$tipoComum = 'comum';
			$tipoImg = 'img';
			$tipoSexo = 'sexo';

			$email = 		$_POST['email'];
			$senha = 		$_POST['senha'];	

			$conexao = new Conexao();

			$id_usuario = $conexao->buscarId($email,$tipoId);

			
			$id_Senha = $conexao->buscar($email,$senha,$tipo_Id_Senha);
			
			$nome = 	 	$conexao->buscar($email,$id_usuario,$tipoNome);
			$sobrenome = 	$conexao->buscar($email,$id_usuario, $tipoSobrenome);
			$email = 	 	$conexao->buscar($email,$id_usuario,$tipoEmail);
			$sexo = 		$conexao->buscar($email,$id_usuario,$tipoSexo);

			$cargo = 		$conexao->buscar($email,$id_usuario,$tipoCargo);
			$instrumento = 	$conexao->buscar($email,$id_usuario,$tipoInstrumento);
			$clave = 		$conexao->buscar($email,$id_usuario,$tipoClave);
			
			$cidade = 		$conexao->buscar($email,$id_usuario,$tipoCidade);
			$comum = 		$conexao->buscar($email,$id_usuario,$tipoComum);
			
			$img = 			$conexao->buscar($email,$id_usuario,$tipoImg);
			
			
			/*
			echo $id_usuario."<br>";
			echo $id_Senha."<br>";
			echo $nome."<br>";
			echo $sobrenome."<br>";
			echo $sexo."<br>";
			echo $cargo."<br>";
			echo $instrumento."<br>";
			echo $clave."<br>";
			echo $cidade."<br>";
			echo $comum."<br>";
			echo $img."<br>";*/

			if(!$id_usuario){
				exit('Noemail');
			}

			if($id_usuario == $id_Senha){
				
				$_SESSION['login_usuario'] 	 = $email;
				$_SESSION['id']				 = $id_usuario;
				$_SESSION['nome'] 			 = $nome;
				$_SESSION['sobrenome'] 		 = $sobrenome;
				$_SESSION['email'] 			 = $email;
				$_SESSION['cargo'] 			 = $cargo;
				$_SESSION['instrumento'] 	 = $instrumento;
				$_SESSION['clave'] 			 = $clave;
				$_SESSION['cidade'] 		 = $cidade;
				$_SESSION['comum'] 			 = $comum;
				$_SESSION['img']			 = $img;
		
				exit('ok');
				
			}else{
				exit('falha');
				
			}
			
			break;

/*==========================================================
		->	LOGOUT.
 ============================================================*/				

		case "logout":

			//unset($_SESSION['login_usuario']);
			session_destroy();
			return 'refresh';
						
			break;
/*==========================================================
		->	INSERT.
 ============================================================*/				

		case "cadastrar":

			$nome = 		$_POST['nome'];
			$sobrenome = 	$_POST['sobrenome'];
			$email = 		$_POST['email'];
			$senha = 		$_POST['senha'];
			$cargo = 		$_POST['cargo'];
			$instrumento =  $_POST['instrumento'];
			$cidade = 		$_POST['cidade'];
			$comum = 		$_POST['comum'];
			$img =  		$_POST['img'];
			
			$imgNome=
			$img = 'img/users/avatar/';
			$imgNome = $nome;
		

			$data['nome'] 		 = $nome;
			$data['sobrenome'] 	 = $sobrenome;
			$data['email'] 		 = $email;
			$data['sexo'] 		 = $sexo;
			$data['senha'] 		 = $senha;
			$data['cargo'] 		 = $cargo;
			$data['instrumento'] = $instrumento;
			$data['clave'] 		 = $clave;
			$data['cidade'] 	 = $cidade;
			$data['comum'] 		 = $comum;
			$data['img']		 = $img;
			$data['imgNome']	 = $imgNome;

			$user = new Usuario($data);
			if($user->inserir()){
				$_SESSION['login_usuario']	 = $email;
				$_SESSION['nome'] 			 = $nome;
				$_SESSION['cargo'] 			 = $cargo;
				$_SESSION['img']			 = $img;
			}

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


function loadSession(){


}
	
?>