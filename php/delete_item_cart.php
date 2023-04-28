<?php

include("general/conn.php");

$user_id=1;
$pro_id=2;

$sql="DELETE FROM cart WHERE user_id=$user_id AND pro_id=$pro_id";

$result = mysqli_multi_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>