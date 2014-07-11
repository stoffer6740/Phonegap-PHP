<?php
header('Access-Control-Allow-Origin: *'); 
	include $_SERVER['DOCUMENT_ROOT'].'/Model/initDB.php';
	$p_id = intval($_GET['p_id']);

	$persons = $person->DeletePerson($p_id);
?>