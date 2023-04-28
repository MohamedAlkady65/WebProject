<?php

include("general/conn.php");
include("general/funs.php");




$data = getArray("SELECT * FROM cates");
$final= array();

foreach($data as $cat)
{
    $id = $cat["cat_id"];

    $s = "SELECT p.pro_id, pro_name,disc,price,stock, g.path
    FROM products p , sub_cates s  , pro_imgs g
    where p.subcat_id=s.subcat_id and s.cat_id= $id AND p.pro_id =g.pro_id AND g.is_default=1 ";

    $data = getArray($s);

    $cat["products"]=$data;
    $final[]=$cat;


}

echo json_encode($final);

mysqli_close($conn);

?>