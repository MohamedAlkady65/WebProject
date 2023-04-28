<?php

include("general/conn.php");
include("general/funs.php");

$cate_id=1;
$subcate_id=1;

$sql = "SELECT p.pro_id, pro_name,disc,price,stock , g.path 
FROM products p , sub_cates s , pro_imgs g 
WHERE s.subcat_id=p.subcat_id AND ( p.subcat_id=$subcate_id OR cat_id=$cate_id ) AND p.pro_id =g.pro_id AND g.is_default=1";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>