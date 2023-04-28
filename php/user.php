<?php

include("general/conn.php");
include("general/funs.php");

$user_id =1;

$sql = "SELECT * FROM users WHERE user_id = $user_id ";
$data = getArray($sql);

echo json_encode($data);

mysqli_close($conn);

?>