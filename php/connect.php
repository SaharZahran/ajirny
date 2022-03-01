<?php
header("Access-Control-Allow-Origin: * ");

$servername = "localhost";
$username = "root";
$password = "";
$database = "ajirny";

// create connection 
$db = mysqli_connect($servername, 
$username ,
$password ,
$database );


$method = $_SERVER['REQUEST_METHOD'];

//check connection

if($db->connect_error) {
die("connection failed:" .$db->connect_error);
}
