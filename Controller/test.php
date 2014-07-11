<?php
	include $_SERVER['DOCUMENT_ROOT'].'/Model/initDB.php';

	$persons = $person->GetAllPersons();

	foreach ($persons as $_person) {
		echo "<p>" . $_person['id'] . " | " . $_person['firstname'] . "</p>";
	}

	$oneperson = $person->GetPerson(2);
	echo "One _person with ID = 2";
	foreach ($oneperson as $_person) {
		echo "<p>" . $_person['id'] . " | " . $_person['firstname'] . "</p>";
	}

	/* $person->DeleteAllPersons();

	$insertperson = $person->InsertPerson("Christoffer", "Bjerregaard", "Uglvigvej 9", "6705", "31951115");
	$insertperson = $person->InsertPerson("Klaus", "Andresen", "Bloksbjergparken", "6600", "85858585");
	$insertperson = $person->InsertPerson("Mak", "Jakubovic", "VejVej", "6700", "85858585");
	$insertperson = $person->InsertPerson("Maria", "Ejlerskov", "Uglvigvej 9", "6705", "85858585");
	$insertperson = $person->InsertPerson("Bettina", "Koop", "Storegade 28", "6800", "85858585");
	$insertperson = $person->InsertPerson("Herluf", "Jensen", "Darumvej 25", "6740", "53542824");
	$insertperson = $person->InsertPerson("Berit", "Bjerregaard", "Darumvej 25", "6740", "53542824"); */
?>