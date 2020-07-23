<?php

$host = "localhost";
$usuario = "root";
$senha = "";
$bd = "haufen";

$conexao = new MySQLi($host, $usuario, $senha, $bd);

if($conexao -> connect_error){
   echo "Desconectado! Erro: " . $mysqli_connection->connect_error;
}


?>