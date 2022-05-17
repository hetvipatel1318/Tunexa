<?php
	$Name=$_POST['Name'];
	$Email= $_POST['Email'];
	$Mobile = $_POST['Mobile'];
	$DoB = $_POST['DoB'];
	$Pass= $_POST['Pass'];
	
	$mdPass= md5($Pass);  

	$con = mysqli_connect("localhost","root","","tunexa") or die("Connection error...");
	
	
	$query="INSERT into users (uName,email,Mobile,DoB,uPass) 
				values ('$Name','$Email','$Mobile','$DoB','$mdPass')";
		
	mysqli_query($con,$query) or die("Insert query error...");
	
	
	header("location:loginform.php");
	
	
	
?>