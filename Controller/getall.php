<?php
header('Access-Control-Allow-Origin: *'); 
	include $_SERVER['DOCUMENT_ROOT'].'/Model/initDB.php';

	echo "<table class='ajax_result'>
	<tr>
	<th>Name</th>
	<th>Show more</th>
	</tr>";
	$persons = $person->GetAllPersons();
		foreach ($persons as $_person) {
		  echo "<tr>";
		  echo "<td>" . $_person['firstname'] . "</td>";
		  echo "<td><input type='button' value='Show more' onclick='GetPerson(". $_person['id'] . ")'></input></td>";
		  echo "</tr>";
		}
		echo "</table>";
?>