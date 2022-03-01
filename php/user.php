<?php
header("Access-Control-Allow-Origin: * ");
$db ="ajirny";
$pass= "";
$server = "localhost";
$userName = "root";
$id = '';

$conn = mysqli_connect($server,$userName,$pass,$db);

$method = $_SERVER['REQUEST_METHOD'];


if(!$conn){
    die('connection failed');
}


switch($method){
case 'GET' :
    $sql="SELECT * FROM users";
}

$result = mysqli_query($conn,$sql);
if(!$result){
    http_response_code(404);
    die(mysqli_error($conn));
}
if($method == "GET"){
    if(!$id) echo '[';
    for($i=0;$i<mysqli_num_rows($result);$i++){
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }if(!$id) echo  ']';
}else{
    echo mysqli_affected_rows($conn);
}

$conn->close();
