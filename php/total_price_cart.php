<?php

include("general/conn.php");
include("general/funs.php");

$user_id=1;

$sql = "SELECT SUM(total_price) as total_price FROM cart WHERE user_id=$user_id";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>