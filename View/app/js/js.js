/* PHP Stuff */

function GetPerson(id) {
	$.ajax({
		url: 'http://scripts.c-bjerregaard.dk/Controller/getuser.php',
		type: 'GET',
		dataType: 'html',
		data: {p_id: id},
	})
	.done(function(data) {
		console.log("success GetPerson()");
		$("#result").html(data);
		
	})
	.fail(function() {
		console.log("error GetPerson()");
		$("#result").html("There was an error");
		
	})
	.always(function() {
		console.log("complete GetPerson()");
		
	});
	
}

function GetAllPersons() {
	$.ajax({
		url: 'http://scripts.c-bjerregaard.dk/Controller/getall.php',
		type: 'GET',
		dataType: 'html',
		
	})
	.done(function(data) {
		console.log("success GetAllPersons()");
		$("#result").html(data);
	})
	.fail(function() {
		console.log("error GetAllPersons()");
		alert("Error fetching persons");
	})
	.always(function() {
		console.log("complete GetAllPersons()");
	});
	
}

function DeletePerson(id){
	$.ajax({
		url: 'http://scripts.c-bjerregaard.dk/Controller/deleteperson.php',
		type: 'GET',
		data: {p_id: id},
	})
	.done(function(data) {
		console.log("success DeletePerson()");
		$("#result").html(data);
		alert("You successfully deleted " + GetPerson(id)['firstname']);
		GetAllPersons();
	})
	.fail(function() {
		console.log("error DeletePerson()");
		$("#result").html("There was an error");
		alert("Error deleting person");
		GetAllPersons();
		
	})
	.always(function() {
		console.log("complete DeletePerson()");
	});
}

$('form').submit(function(e) {
	e.preventDefault();
	var postData = $(this).serialize();

	$.ajax({
		url: 'http://scripts.c-bjerregaard.dk/Controller/insertperson.php',
		type: 'POST',
		data: postData,
	})
	.done(function(data) {
		console.log("success Submitting data");
		alert("You added " + $('#firstname').val() + " " + $('#lastname').val() + " to the database.");
		HideForm();
		GetAllPersons();

		
	})
	.fail(function() {
		console.log("error Submitting data");
		$("#result").html("There was an error");
		alert("Error adding person.");
		HideForm();
	})
	.always(function() {
		console.log("complete Submitting data");
	});
});
	


/* jQuery stuff. */

function InsertPersonForm() {
	$('#InsertPersonForm').show();
	$('#HideThis').hide();
}

function HideForm() {
	$('#InsertPersonForm').hide();
	$('#HideThis').show();
	ClearFields();
}

function ClearFields(){
	$('#firstname').val("");
	$('#lastname').val("");
	$('#address').val("");
	$('#zipcode').val("");
	$('#phone').val("");
}