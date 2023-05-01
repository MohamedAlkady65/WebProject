<?php
include("../general/conn.php");
include("../general/funs.php");

$cat_id=$_GET['cat_id'];


if($cat_id=="all")
$query = "SELECT subcat_id,subcat_name FROM sub_cates";
else
$query = "SELECT subcat_id,subcat_name FROM sub_cates WHERE cat_id=$cat_id";


$data = getArray($query);



echo json_encode($data);

mysqli_close($conn);

?>