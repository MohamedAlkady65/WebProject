<?php

include("general/conn.php");
include("general/funs.php");

$pro_id=$_GET["pro_id"];

$sql = "SELECT * FROM products WHERE pro_id=$pro_id";
$final = getArray($sql)[0];



$sqlr = "SELECT CONCAT(fname, ' ', lname) as name , rev_text FROM reviews r , users u  WHERE u.user_id=r.user_id AND pro_id =$pro_id";
$rev = getArray($sqlr);

$sqlm = "SELECT path,is_default FROM pro_imgs WHERE pro_id=$pro_id";
$imgs = getArray($sqlm);

$final["reviews"] = $rev;
$final["imgs"] = $imgs;
$final["spec"]=json_decode($final["spec"]);

echo json_encode($final);

mysqli_close($conn);

?>