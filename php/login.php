<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
require 'connect.php';

if (isset($_POST) && !empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='" . $email . "' limit 1 ";
    $result = mysqli_query($db, $sql);

    if (mysqli_num_rows($result) == 1) {
        $email_error = "The email you entered already exists";
        echo json_encode($email_error);
    } else {
        $sql_insert = "INSERT INTO users (name,email,password,) VALUES ('$name','$email','$password')";
        if (mysqli_query($db, $sql_insert)) {
            $sql_select = "SELECT * FROM users where email = $email";
            $result = mysqli_query($db, $sql);
            $row = mysqli_fetch_assoc($result);
            http_response_code(201);
            print json_encode($row);
        } else {
            http_response_code(422);
        }
    }
}
