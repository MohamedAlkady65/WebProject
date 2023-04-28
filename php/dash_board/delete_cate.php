<?php

include("../general/conn.php");

$cate_id=4;


$sql="DELETE p FROM products p 
INNER JOIN sub_cates s ON p.subcat_id=s.subcat_id 
INNER JOIN cates c ON  s.cat_id = c.cat_id 
WHERE c.cat_id=$cate_id;

DELETE FROM sub_cates WHERE cat_id=$cate_id;

DELETE FROM cates WHERE cat_id=$cate_id;";

$result = mysqli_multi_query($conn, $sql);

if($result)
echo "ok";
else
echo "no";

mysqli_close($conn);

?>