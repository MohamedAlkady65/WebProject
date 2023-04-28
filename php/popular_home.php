<?php

include("general/conn.php");
include("general/funs.php");

$sql="SELECT p.pro_id, pro_name,disc,price,stock , g.path , SUM(quant) as qu
FROM order_items o ,  products p , pro_imgs g 
WHERE p.pro_id=o.pro_id  AND p.pro_id =g.pro_id AND g.is_default=1
GROUP BY o.pro_id ORDER BY qu DESC LIMIT 2 ";


$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>