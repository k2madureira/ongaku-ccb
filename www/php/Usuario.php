<?php
include_once('ConexaoUsuario.php');
class Usuario{

/*==========================================================
		-> Atributos
 ============================================================*/		

	public 		$_Nome;
	public 		$_Sobrenome;
	public 		$_Email;
	protected	$_Senha;
	public 		$_Cargo;
	public 		$_Instrumento;
	public 		$_Cidade;
	protected 	$_Comum;
	public      $_Img;
	public      $_Imgnome;

/*==========================================================
		-> Construct.
 ============================================================*/	

	function __construct($data){


		if(isset($data['nome'])){
			$this->_Nome = 	$data['nome'];
		}
		if(isset($data['sobrenome'])){
			$this->_Sobrenome = 	$data['sobrenome'];
		}
		if(isset($data['email'])){
			$this->_Email = $data['email'];
		}
		
		if(isset($data['senha'])){
			$this->_Senha = 		 $data['senha'];
		}
		if(isset($data['cargo'])){
			$this->_Cargo = 		 $data['cargo'];
		}
		
		if(isset($data['instrumento'])){
			$this->_Instrumento = 		 $data['instrumento'];
		}
		if(isset($data['cidade'])){
			$this->_Cidade = 		 $data['cidade'];
		}
		if(isset($data['comum'])){
			$this->_Comum = 		 $data['comum'];
		}
		if(isset($data['img'])){
			$this->_Img = 		 $data['img'];
		}
		if(isset($data['imgNome'])){
			$this->_Imgnome = 		 $data['imgNome'];
		}
		


	}

/*----------------------------------------------------------
			 		( MÉTODOS )
 -----------------------------------------------------------*/	

/*==========================================================
		->	Insert.
 ============================================================*/		

	function inserir(){


		$conexao = new Conexao();
		$con=$conexao->conectar();

		$queryMusica = $con->query("
			INSERT INTO musica(cargo, instrumento)
			VALUES ('$this->_Cargo','$this->_Instrumento')");
		$string_id_musica = $con->lastInsertId(); // Pegando último Id inserio na tabela -musica-
		$id_musica = (int)$string_id_musica; // converte para INT.
		
		

		$queryEndereco = $con->query("
			INSERT INTO enderecos (cidade, comum)
			VALUES ('$this->_Cidade','$this->_Comum')");
		$string_id_Endereco = $con->lastInsertId(); // Pegando último Id inserio na tabela -endereco-
		$id_endereco = (int)$string_id_Endereco; // converte para INT.


		$queryImg = $con->query("
			INSERT INTO img_users (titulo_img, caminho_img)
			VALUES ('$this->_Imgnome','$this->_Img')");
		$string_id_Img = $con->lastInsertId(); // Pegando último Id inserio na tabela -endereco-
		$id_img = (int)$string_id_Img; // converte para INT.
		

		$insere = $con->query(" 
			INSERT INTO usuarios(nome, sobrenome, email, senha, musica_id, endereco_id, img_id)
			VALUES ('$this->_Nome','$this->_Sobrenome','$this->_Email','$this->_Senha', '$id_endereco', '$id_musica', '$id_img')");

		return 'sucesso';	
		
				
	}
/*==========================================================
		->	Update.
 ============================================================*/		
	function editar(){


			$busca = $con->prepare("SELECT * FROM usuarios");
				$busca->execute();
				
				while($row = $busca->fetch(PDO::FETCH_OBJ)){
					  echo $row->idusuario . "->";
					  echo $row->nome . "->";
					  echo $row->email . "->";
					  echo $row->senha . "->";
					  echo"</br>";
					}



		$busca = $con->prepare("SELECT nome, cargo, cidade FROM usuarios JOIN musica, enderecos WHERE idusuario=idmusica");
				$busca->execute();
	
				

					  foreach ($busca as $key => $value) {

					  	  echo "</br>".$value['nome'] . "->";
					  	  echo "</br>".$value['cargo'] . "->";
					  	  echo "</br>".$value['cidade'] . "->";
					  	   
					}
	}
/*==========================================================
		->	Delete.
 ============================================================*/	
	function deletar(){

	}
	

}


?>