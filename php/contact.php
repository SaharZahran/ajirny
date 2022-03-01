<?php

header("Access-control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$database= "ajirny";

$id ="";


// Create connection
$db = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':

      if(isset($_GET["id"])){
        $id = $_GET['id'];
      }
      $sql = "select * from contact".($id?" where id=$id":''); 
      break;
    case 'POST':
            $name = $_POST["name"];
            $email = $_POST["email"];
            $message = $_POST["message"];
            $sql = "insert into contact (name, email, message) values ('$name', '$email','$message')"; 
    break;
}
 
// run SQL statement
$result = mysqli_query($db,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($db));
}