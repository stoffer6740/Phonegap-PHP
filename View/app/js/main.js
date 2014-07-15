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

$('#InsertPerson').submit(function(e) {
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



function handleLogin() {
var form = $("#loginForm");    
//disable the button so we can't resubmit while we wait
//$("#submitButton",form).attr("disabled","disabled");
var e = $("#username", form).val();
var p = $("#password", form).val();

console.log("click");
if(e != "" && p != "") {
    var str = form.serialize();
    alert(str);
    $.ajax({ 
                     type: 'POST', 
                     url: 'http://scripts.c-bjerregaard.dk/Controller/login.php', 
                     //crossDomain: true,
                     data:  {username: e, password :p},
                     dataType: 'json', 
                     //async: false,

                     success: function (response){ 
                        alert ("response"); 
                        if (response.success) { 
                            alert("you're logged in");
                            window.localStorage["username"] = e;
                            window.localStorage["password"] = p; 
                            //window.localStorage["UID"] = data.uid;           
                            window.location.replace(main.html);
                        } 
                        else {

                            alert("Your login failed");
                            //window.location("main.html");
                        }


                     },
                     error: function(error){
                         //alert(response.success);
                        alert('Could not connect to the database' + error);
                        window.location = "main.html";
                    }
    }); 
}
else {
    //if the email and password is empty
    alert("You must enter email and password");

}
return false;
}