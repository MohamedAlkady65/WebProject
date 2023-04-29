<?php

include("../general/conn.php");

$subcate_id=$_POST['subcate_id'];


$sql="DELETE FROM products WHERE subcat_id=$subcate_id;
    DELETE FROM sub_cates WHERE subcat_id=$subcate_id;";

$result = mysqli_multi_query($conn, $sql);

if($result)
echo $_POST['subcate_id'];
else
echo "no";

mysqli_close($conn);

?>