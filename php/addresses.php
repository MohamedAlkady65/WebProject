<?php

include("general/conn.php");
include("general/funs.php");

$user_id =1;

$sql = "SELECT add_id,street,city,phone,note,is_default FROM addresses WHERE user_id=$user_id";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>