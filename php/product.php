<?php

include("general/conn.php");
include("general/funs.php");

$pro_id=1;

$sql = "SELECT * FROM products WHERE pro_id=$pro_id";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>