<?php
header('Access-Control-Allow-Origin: *'); 
include $_SERVER['DOCUMENT_ROOT'].'/Model/initDB.php';

$username = $_POST['username'];
$password = $_POST['password'];

echo "string" . $username . " " . $password;

var_dump($_SERVER);
echo "</br> ";
var_dump($_POST);



$person->checkLogin($username, $password);

 //echo 'OK';

?>