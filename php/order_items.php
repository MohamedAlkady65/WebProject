<?php

include("general/conn.php");
include("general/funs.php");

$order_id=1;

$sql = "SELECT order_id,pro_id,pro_name,path,price,quant,total_price FROM order_items WHERE order_id=$order_id";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>