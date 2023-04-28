<?php

include("general/conn.php");
include("general/funs.php");

$user_id=1;

$sql = "SELECT order_id,add_id,datee,total_price,order_status FROM orders WHERE user_id = $user_id";
$data = getArray($sql);

$final=array();

foreach($data as $ele)
{
    $order_id=$ele['order_id'];
    $sql = "SELECT SUM(quant) as total_quant FROM order_items WHERE order_id =$order_id";
    $data = getArray($sql);

    $ele['total_quant']=$data[0]['total_quant'];
    $final[]=$ele;
}

echo json_encode($final);

mysqli_close($conn);

?>