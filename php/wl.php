<?php
include("conexao.php");



$discord = $_POST["discord"];
$steam = $_POST["steam"];
$exp = $_POST["resposta1"];
$oqRp = $_POST["resposta2"];
$kOs = $_POST["resposta3"];
$powerGaming = $_POST["resposta4"];
$badRp = $_POST["resposta5"];
$metaGaming  = $_POST["resposta6"];
$respostas = [$exp, $oqRp, $kOs, $powerGaming, $badRp, $metaGaming];
$veri = 0;



foreach ($respostas as $resposta) {
    if ($resposta == "T") {
        $veri++;
    }
}



$sql = "SELECT id FROM whitelist WHERE discord ='{$discord}' AND steam = '{$steam}'";

$total = mysqli_query($conexao, $sql);
$rows = mysqli_num_rows($total);

if ($rows == 0) {

    $result_us = "INSERT INTO whitelist (discord, steam, resultado) VALUES('{$discord}','{$steam}', '{$veri}')";
    $query = mysqli_query($conexao, $result_us);
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/wl.css">
    <link rel="shortcut icon" href="../image/logoverde.png">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed&display=swap" rel="stylesheet">
    <title>White List Finalizada - Hafen</title>
</head>

<body>



    <nav class=" barra barraFimWl">
        <ul>
            <li><a href="../index.php">Inicio</a></li>
            <li><a href="../html/servidores.html">Servidores</a></li>
            <li><a href="https://discord.gg/QsYqCMm" target="_blank">Discord</a></li>
            <li><a href="../html/sobre.html">Sobre</a></li>
        </ul>
    </nav>

    <div class="quadrado final">
        <div class="tituloDiv">
            <h2>Obrigado por fazer a nossa </h2>
            <h2 class="p2TituloDiv">White List</h2>
        </div>
        <hr>
        <p class="infoPosWl">Sua White List (WL) foi enviada para nossa administração, caso você tenha acertado mais de 50% do
            nosso questionário você será aprovado, tenha paciência e espere.</p>

        <button id="voltarInicio">Voltar para o inicio</button>

    </div>
    <footer>
        <div class="descRoda">
            <h1>Faça sua doação!!</h1>
            <p>Ajude nossos servidores!!! Doando você contribui para que os servidores continuem e melhorem. Além disso, você tera a oportunidade de ser recompensado com presentes em nossos servidores.</p>

        </div>
        <div>
            <button class="doar">CLICK AQUI</button>
        </div>
    </footer>
    <script src="../js/wl.js"></script>
</body>

</html>