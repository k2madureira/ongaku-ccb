<?php

	
	/* Criando conexão com banco de dados atrvés do PDO (pho data objeto)
	*  em caso de erro entrará no PDOException
	*/
	
  class Conexao{  	
	
	
	public function conectar(){

		/*$host = 'databases-auth.000webhost.com';
		$dbname='id2140296_2c1b';*/
		$senha = 'password';
		$user='k2madureira';
	try{
		$conn = new PDO('mysql:host=000webhost.com;dbname=id2140296_2c1b',$user,$senha);
		
		
		return($conn);
	
	}catch(PDOException $e)
	{
		echo $e->getMessage();
	}
	
	}
	
	
	
	/*
	* Function buscar($dado,$tipo) 
	* A busca poderá ser  feita com nome ou email, ao realizar a busca será retornado o token de usuário.
	* @param $dado => É a busca que o usuario realizou sendo email ou Nome.
	* @param $tipo => Variavel para uso de laço switch direcionando a busca para email ou nome.
	*/
	
	public function buscarId($email){

				$con = $this->conectar();//ABRINDO CONEXÃO COM O BANCO DE DADOS

				$busca = $con->prepare("SELECT idusuario FROM usuarios WHERE email ='$email'");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					if($busca->rowCount() == 1)
					{
					return($encontra->idusuario);
					}
					else
					{ 
					$msg="Id não encontrado";
					return($msg);
					}
	}

	public function buscar($mail,$dado,$tipo){
	
	
	
	
		$con = $this->conectar();//ABRINDO CONEXÃO COM O BANCO DE DADOS
	
		

	  
	  switch ($tipo)  {


	  	
	/*______________________________________________________________________________________________________
										BUSCAS NA TABELA *usuario*
	________________________________________________________________________________________________________*/			
			
				case "nome":// BUSCA UTILIZANDO O NOME DE USUARIO
			
				$busca = $con->prepare("SELECT nome FROM usuarios WHERE idusuario = '$dado' ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					if($busca->rowCount() == 1)
					{
					return($encontra->nome);
					}
					else
					{ 
					$msg="Este usuario não está cadastrado no nosso sistema";
					return($msg);
					}
				break;

				case "sobrenome":// BUSCA UTILIZANDO O NOME DE USUARIO
			
				$busca = $con->prepare("SELECT sobrenome FROM usuarios WHERE idusuario = '$dado' ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					if($busca->rowCount() == 1)
					{
					return($encontra->sobrenome);
					}
					else
					{ 
					$msg="Este usuario não está cadastrado no nosso sistema";
					return($msg);
					}
				break;
			
				case "email"://BUSCA UTILIZANDO O EMALIL DO USUARIO	
			
				$busca = $con->prepare("SELECT email FROM usuarios WHERE idusuario ='$dado'");
				$busca->execute();
				$encontra=$busca->fetch(PDO::FETCH_OBJ);
					
					if($busca->rowCount() ==1)
					{
						return($encontra->email);
					}
					else
					{
						$msg="Este usuario não está cadastrado no nosso sistema";
						return($msg);
					}
					
				break;

				case "sexo"://BUSCA UTILIZANDO O EMALIL DO USUARIO	
			
				$busca = $con->prepare("SELECT sexo FROM usuarios WHERE idusuario ='$dado'");
				$busca->execute();
				$encontra=$busca->fetch(PDO::FETCH_OBJ);
					
					if($busca->rowCount() ==1)
					{
						return($encontra->sexo);
					}
					else
					{
						$msg="Este usuario não está cadastrado no nosso sistema";
						return($msg);
					}
					
				break;
	/*______________________________________________________________________________________________________
										BUSCAS NA TABELA *musica*
	________________________________________________________________________________________________________*/			

				case "cargo":// BUSCA DE CARGO
			
				$busca = $con->prepare("SELECT cargo FROM usuarios JOIN musica WHERE idmusica = '$dado' ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					foreach ($busca as $key => $value) {

						if($value['cargo']){
							return $value['cargo'];
						}else{
							return '';
						}

					  	   
					}
					
				break;

				case "instrumento":// BUSCA DE INSTRUMENTO
			
				$busca = $con->prepare("SELECT instrumento FROM usuarios JOIN musica WHERE '$dado' = idmusica ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					foreach ($busca as $key => $value) {

						if($value['instrumento']){
							return $value['instrumento'];
						}else{
							return '';
						}

					  	   
					}
				break;

				case "clave":// BUSCA DE CLAVE
			
				$busca = $con->prepare("SELECT clave FROM usuarios JOIN musica WHERE '$dado' = idmusica ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					foreach ($busca as $key => $value) {

						if($value['clave']){
							return $value['clave'];
						}else{
							$msg ='';
							return $msg;
						}

					  	   
					}
				break;

	/*______________________________________________________________________________________________________
										BUSCAS NA TABELA *enderecos*
	________________________________________________________________________________________________________*/	

				case "cidade":// BUSCA DE CLAVE
			
				$busca = $con->prepare("SELECT cidade FROM usuarios JOIN enderecos WHERE '$dado' = idendereco ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					foreach ($busca as $key => $value) {

						if($value['cidade']){
							return $value['cidade'];
						}else{
							$msg ='';
							return $msg;
						}  	   
					}

				break;

				case "comum":// BUSCA DE CLAVE
			
				$busca = $con->prepare("SELECT comum FROM usuarios JOIN enderecos WHERE '$dado' = idendereco ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					foreach ($busca as $key => $value) {

						if($value['comum']){
							return $value['comum'];
						}else{
							$msg ='';
							return $msg;
						}	  	   
					}

				break;
	/*______________________________________________________________________________________________________
										BUSCAS NA TABELA *img_users*
	________________________________________________________________________________________________________*/

				case "img":// BUSCA DE CLAVE
			
				$busca = $con->prepare("SELECT caminho_img FROM usuarios JOIN img_users WHERE '$dado' = idimg ");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					foreach ($busca as $key => $value) {

						if($value['caminho_img']){
							return $value['caminho_img'];
						}else{
							$msg ='';
							return $msg;
						}	  	   
					}

				break;


	/*______________________________________________________________________________________________________
										CONFIRMAÇÕES DE IDUSUARIO
	________________________________________________________________________________________________________*/			

				
				case "idSenha"://BUSCA UTILIZANDO A SENHA DO USUARIO	
			
				$busca = $con->prepare("SELECT idusuario FROM usuarios WHERE email = '$mail' AND senha ='$dado'");
				$busca->execute();
				$encontra =$busca->fetch(PDO::FETCH_OBJ);
				
					
					if($busca->rowCount() == 1)
					{
					return($encontra->idusuario);
					}
					else
					{ 
					$msg="senha não existe";
					return($msg);
					}
					
				break;

				case "idEmail"://BUSCA UTILIZANDO A SENHA DO USUARIO	
			
				$busca = $con->prepare("SELECT idusuario FROM usuarios WHERE email LIKE '$dado' ORDER BY email");
				$busca->execute();
				$encontra=$busca->fetch(PDO::FETCH_OBJ);
					
					foreach ($busca as $key => $value) {

						if($value['idusuario']){
							return $value['idusuario'];
						}else{
							$msg ='';
							return $msg;
						}	  	   
					}
					
				break;
				
		}
	
		
	}
}
	
	?>
	
	