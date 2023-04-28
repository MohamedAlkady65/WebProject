<?php

include("../general/conn.php");

$subcate_id=1;
$newname="kll";


$sql="UPDATE sub_cates SET subcat_name = '$newname' WHERE subcat_id=$subcate_id";

$result = mysqli_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>