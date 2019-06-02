<?php
// ini_set('display_errors', '0'); 
	if(isset($_POST["action"])){
		$transaccion = $_POST["action"];
		if(!empty($transaccion)){
			ejecutarTransaccion($transaccion);
		}	
	}else{
		echo "ERROR";
	}

	function ejecutarTransaccion($transaccion){
		if($transaccion == "correo"){

			if($_POST['name']);
			else 									{echo "Correcto: Mensaje enviado"; return false;}
			if($_POST['email']);
			else 									{echo "Error de asunto"; return false;}
			if($_POST['issue']);
			else 									{echo "Error de correo"; return false;}
			if($_POST['message']);
			else									{echo "Error de comentario"; return false;}

			$bool = mail('jorge@dpaul.com.mx', "Contacto de DPaul", "Correo: ".$_POST['email']."\n\n"."Estado: ".$_POST['issue']."\n\n"."Nombre: ".$_POST['name']."\n\n".$_POST['message'], '');

			if($bool){
			    echo "Mensaje enviado";
			}else{
			    echo "Error: mensaje no enviado";
			}
		}
	}
?>

