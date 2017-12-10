<?php

if (isset($_GET['age'])) {
	register();
}
elseif (isset($_GET['email']) && isset($_GET['password'])) {
	login();
}
elseif (isset($_GET['title'])) {
	uploadReport();
}


function register(){
	$con = mysqli_connect("localhost","root","","mobilefinalproject");
	$age = $_GET['age'];
	$phone  = $_GET['phonenumber'];
	$org  = $_GET['org'];
	$email  = $_GET['email'];
	$name  = $_GET['name'];
	$password  = $_GET['password'];

$query = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($con,$query);
if (mysqli_num_rows($result) >0) {
	echo "User already exist";
}
else {
	$password = password_hash($password, PASSWORD_DEFAULT);
	$query = "INSERT INTO user(name, email, password, phonenumber, age, organization) VALUES('$name','$email','$password','$phone','$age','$org')";
	$result = mysqli_query($con,$query);
	if ($result) {
		echo "User created";
	}
	else{
		echo "Error ".mysqli_error($con);
	}
}
}

function login(){
	$con = mysqli_connect("localhost","root","","mobilefinalproject");
	$email  = $_GET['email'];
	$password  = $_GET['password'];

	$query = "SELECT email,password FROM user WHERE email='$email'";
	$result = mysqli_query($con,$query);
	if (mysqli_num_rows($result) ==1) {
		$row = mysqli_fetch_assoc($result);
		if (password_verify($password,$row['password'])) {
			//header("Location:../newPost.html");
			echo "success";
		}
		else{
			echo "string";
		}	
	}
	else{
		echo "Error ".mysqli_error($con);
	}
}

?>