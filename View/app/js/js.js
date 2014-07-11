/* PHP Stuff */

function GetPerson(id) {
	$.ajax({
		url: 'http://scripts.c-bjerregaard.dk/Controller/getuser.php',
		type: 'GET',
		dataType: 'html',
		data: {p_id: id},
	})
	.done(function(data) {
		console.log("success");
		$("#result").html(data);
		
	})
	.fail(function() {
		console.log("error");
		$("#result").html("There was an error");
		
	})
	.always(function() {
		console.log("complete");
		
	});
	
}

function GetAllPersons() {
	$.ajax({
		url: 'http://scripts.c-bjerregaard.dk/Controller/getall.php',
		type: 'GET',
		dataType: 'html',
		
	})
	.done(function(data) {
		console.log("success");
		$("#result").html(data);
		
	})
	.fail(function() {
		console.log("error");
		$("#result").html("There was an error");
		
	})
	.always(function() {
		console.log("complete");
		
	});
	
}

$('form').submit(function(e) {
	e.preventDefault();
	var postData = $(this).serialize();

	$.ajax({
		url: 'http://scripts.c-bjerregaard.dk/Controller/insertuser.php',
		type: 'POST',
		data: postData,
	})
	.done(function(data) {
		console.log("success");
		//$("#result").html(data);
		navigator.notification.alert('Person inserted', alertCallback, 'Success', 'Ok');
		$('#InsertPerson')[0].reset();
		
	})
	.fail(function() {
		console.log("error");
		$("#result").html("There was an error");
		alert('fail');
		$('#InsertPerson')[0].reset();
		
	})
	.always(function() {
		console.log("complete");
		$('#InsertPerson')[0].reset();
		
	});
});

function resetForm() {
	$('#firstname').val("");
}
	


/* jQuery stuff. */

function ShowForm() {
	$('#ShowForm').show();
	$('#HideThis').hide();
}

function InsertPerson() {
	$('#ShowForm').hide();
	$('#HideThis').show();
}