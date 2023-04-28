<?php

include("general/conn.php");
include("general/funs.php");

$order_id=1;

$sql = "SELECT p.pro_id , pro_name,price,quant,total_price,g.path
        FROM order_items i ,products p , pro_imgs g 
        WHERE p.pro_id=i.pro_id AND order_id = $order_id  AND p.pro_id =g.pro_id AND g.is_default=1;";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>