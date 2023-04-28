<?php

include("../general/conn.php");

$cate_id=4;
$name="eded";


$sql="INSERT INTO sub_cates VALUES('','$cate_id','$name')";

$result = mysqli_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>