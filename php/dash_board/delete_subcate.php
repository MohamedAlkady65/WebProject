<?php

include("../general/conn.php");

$subcate_id=3;


$sql="DELETE FROM products WHERE subcat_id=$subcate_id;
    DELETE FROM sub_cates WHERE subcat_id=$subcate_id;";

$result = mysqli_multi_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>