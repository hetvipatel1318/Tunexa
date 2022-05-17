<script src="https://kit.fontawesome.com/fe64e0f126.js" crossorigin="anonymous">
</script>
<head>
<script language="javascript" type="text/javascript">
window.history.forward();
</script>
<style>
body {

  background-image: url('1.jpg');
  background-size:100% 100%;
}
div.login-form{
    width: 450px;
    box-shadow: 0px 5px 10px black;
	padding:0px 
}
div.login-form form{
	padding:20px 20px;
}
.top-left {
  position: absolute;
  top: 0.00004px;
  left: 5px;
  right: 7px;
}
#logo {
  border-radius: 50px 50px;
  background: linear-gradient(to bottom, silver,white,silver);
  padding: 4px; 
} 
</style>

<script>
function validate()
{
	
	uEmail=document.getElementById("idEmail").value;
	uPass=document.getElementById("idPass").value;
	msg=document.getElementById("msg");
	msg.innerHTML="";
	var flag=true;
	
	if(uEmail.length == 0)
	{
		msg.innerHTML=msg.innerHTML+"<BR>Email must not be blank...";
		flag=false;
	}
	if(uPass.length < 6)
	{
		msg.innerHTML=msg.innerHTML+"<BR>Password must be at least of 6 characters";
		flag=false;
	}
	
	return flag;
	
}
</script>
<body>
<div class="top-left"><a href='homepage.html'><h1><img src="tunexa.png" align="right" height="100px" id='logo'></div></h1></a>
<center><br><br>
<div class="login-form">
<form method="POST" action="login.php" onsubmit="return validate()">
<center>
<table style="border: none;">
<caption>
<h1 style="border: none;
opacity:0.7;background-color:#49CFDE;color:white;">LOGIN</h1> </caption>
<tr> 
<td> 
    <br>
       
            <i style=" background:none;
    padding: 10px 12px;
   
    margin-right: 4px;" class="far fa-envelope"></i>
	<input style="height:45px;width:220px;" type="email" id="idEmail" name="uEmail" placeholder="Email">		<br>
</tr>
<br><br><br>

<tr>
	<td> 
	 <i style=" background:none;
    padding: 10px 12px;
   
    margin-right: 4px;" class="fas fa-key"></i>
	<input style="height:45px;width:220px;margin: 20px 0px" type="password" id="idPass" name="pass" placeholder="Password">
</tr>

<tr>
	<td> <div id="msg" style="color:red"> </div>
</tr>
<tr>
	<td><br><input type="submit" value="Login"style="height:44px;width:30.5%; margin: 0px 50px ;background:white);">
	<input type="reset" value="Clear"style="height:44px;width:30.5%;
	background:white);">
</tr>
</table>

</form>
</div>
</center>