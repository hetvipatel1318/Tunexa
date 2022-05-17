<?php

	
	$uEmail=$_POST['uEmail'];
	$uPass=$_POST['pass'];
	$mdPass=md5($uPass);
	
	
	$con=mysqli_connect("localhost","root","","tunexa") or die("Connection error...");
	
	$query = "SELECT uName,email 
				from users where 
				email='$uEmail' 
				and 
				uPass='$mdPass'";
	
	
	$result=mysqli_query($con,$query);
	

	if (mysqli_num_rows($result) > 0) 
	{
	
		header("location:header.php");
	}
	else
		echo "Invalid User....";
	
	
	
	
	
?>