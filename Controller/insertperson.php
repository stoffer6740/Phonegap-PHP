<?php 
header('Access-Control-Allow-Origin: *'); 
	include $_SERVER['DOCUMENT_ROOT'].'/Model/initDB.php';

	$_firstname = $_POST['firstname'];
	$_lastname = $_POST['lastname'];
	$_address = $_POST['address'];
	$_zipcode = $_POST['zipcode'];
	$_phone = $_POST['phone'];
	echo $_POST['firstname'];

	$insertperson = $person->InsertPerson($_firstname, $_lastname, $_address, $_zipcode, $_phone);
?>