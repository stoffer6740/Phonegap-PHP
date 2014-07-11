<?php
header('Access-Control-Allow-Origin: *'); 
	include $_SERVER['DOCUMENT_ROOT'].'/Model/initDB.php';
	$p_id = intval($_GET['p_id']);

	$persons = $person->GetPerson($p_id);
		foreach ($persons as $_person) {
		  echo "<div class='col-xs-12'>";
		  echo "<div class='col-xs-4'>Name</div>" . "<div class='col-xs-8'>" . $_person['firstname'] . " " . $_person['lastname'] . "</div>";
		  echo "<div class='col-xs-4'>Address</div>" . "<div class='col-xs-8'>" . $_person['address'] . "</div>";
		  echo "<div class='col-xs-4'>Zipcode</div>" . "<div class='col-xs-8'>" . $_person['zipcode'] . "</div>";
		  echo "<div class='col-xs-4'>Phone</div>" . "<div class='col-xs-8'>" . $_person['phone'] . "</div>";
  		  echo "<div class='col-xs-4'></div>" . "<div class='col-xs-8'><input type='button' value='Delete person' onclick='DeletePerson(" . $_person['id'] . ");'></input></div>";
		  echo "</div>";
		}
		echo "</table>";
?>