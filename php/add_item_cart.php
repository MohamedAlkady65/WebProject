<?php

include("general/conn.php");


$user_id=2;
$pro_id=6;
$quant=3;

$sql="INSERT INTO cart VALUES($user_id,$pro_id,$quant,(SELECT price FROM products WHERE pro_id = $pro_id)*$quant)";

$result = mysqli_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>