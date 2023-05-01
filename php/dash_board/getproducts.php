<?php

include("../general/conn.php");
include("../general/funs.php");


$json_data = file_get_contents('php://input');

$data = json_decode($json_data);

$cat_id = $data->cat_id;
$subcat_id = $data->subcat_id;

if($cat_id=="all"&&$subcat_id=="all")
$query = "SELECT pro_id, pro_name ,c.cat_name,s.subcat_name,price,stock FROM products p ,sub_cates s , cates c WHERE p.subcat_id=s.subcat_id AND s.cat_id = c.cat_id";
elseif($subcat_id!="all")
$query = "SELECT pro_id, pro_name ,c.cat_name,s.subcat_name,price,stock FROM products p ,sub_cates s , cates c WHERE p.subcat_id=s.subcat_id AND s.cat_id = c.cat_id AND p.subcat_id=$subcat_id";
elseif($cat_id!="all"&&$subcat_id=="all")
$query = "SELECT pro_id, pro_name ,c.cat_name,s.subcat_name,price,stock FROM products p ,sub_cates s , cates c WHERE p.subcat_id=s.subcat_id AND s.cat_id = c.cat_id AND s.cat_id=$cat_id";


$data = getArray($query);


$final= array();

foreach($data as $pro)
{
    $id = $pro["pro_id"];

    $s = "SELECT pro_id , SUM(quant) as num_sales  FROM order_items WHERE pro_id=$id GROUP BY quant";

    $data = getArray($s);

    if(count($data)==0)
        $pro["num_sales"]=0;
    else
        $pro["num_sales"]=$data[0]['num_sales'];
    $final[]=$pro;

}

echo json_encode($final);

mysqli_close($conn);

?>