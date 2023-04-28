<?php

include("general/conn.php");
include("general/funs.php");

$user_id=1;

$sql = "SELECT p.pro_id, pro_name,disc,price,stock , quant,total_price , g.path
FROM products p , cart c , pro_imgs g 
WHERE p.pro_id = c.pro_id and user_id=1 AND p.pro_id =g.pro_id AND g.is_default=$user_id";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>