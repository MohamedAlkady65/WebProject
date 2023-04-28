<?php

include("../general/conn.php");


$subcate_id=3;
$name="kkk";
$disc="zzfffz";
$spec="sfffss";
$price=10;
$stock=1;

$sql="INSERT INTO products VALUES ('','$subcate_id','$name','$disc','$spec','$price','$stock')";

$result = mysqli_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>