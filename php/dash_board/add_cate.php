<?php

include("../general/conn.php");


$name="kkk";


$sql="INSERT INTO cates VALUES('','$name')";

$result = mysqli_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>