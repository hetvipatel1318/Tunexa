<script src="https://kit.fontawesome.com/fe64e0f126.js" crossorigin="anonymous">
</script>
<script language="javascript" type="text/javascript">
window.history.forward();
</script>
<head>

<style>
body {

  background-image: url('1.jpg');
  background-size:100% 100%;
}
div.signup-form{
    width: 450px; 
    box-shadow: 0px 5px 10px black;
}

div.signup-form form{
	padding:10px 60px;
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
function checkPass(obj)
{
	uPass=document.getElementById("idPass");
	cPass=document.getElementById("idCPass");
	msg=document.getElementById("msg");
	msg.innerHTML="";
	if(uPass.value!=cPass.value)
	{
		msg.innerHTML=msg.innerHTML+"<BR>Password does not match...";
		obj.focus();
		return;
	}
}
function validate()
{
	
	Name=document.getElementById("idName").value;
	Email=document.getElementById("idEmail").value;
	Mobile=document.getElementById("idMobile").value;
	DoB=document.getElementById("idDoB").value;
	Pass=document.getElementById("idPass").value;	
	msg=document.getElementById("msg");
	msg.innerHTML="";
	cPass=document.getElementById("idCPass").value;
	var flag=true;
	if(Name.length == 0)
	{
		msg.innerHTML="Name must not be blank...";
		flag=false;
	}
	if(Email.length == 0)
	{
		msg.innerHTML=msg.innerHTML+"<BR>Email must not be blank...";
		flag=false;
	}
	if(Mobile.length == 0)
	{
		msg.innerHTML="Mobile must not be blank...";
		flag=false;
	}
	if(Pass.length < 6)
	{
		msg.innerHTML=msg.innerHTML+"<BR>Password must be at least of 6 characters";
		flag=false;
	}

	if(Pass!=cPass)
	{
		msg.innerHTML=msg.innerHTML+"<BR>Password does not match...";
		flag=false;
	}
	return flag;
	
}
</script>
<body>
<div class="top-left"><a href='homepage.html'><h1><img src="tunexa.png" align="right" height="100px" id='logo'></div></h1></a>
<center><br><br>
<div class="signup-form">
<form method="POST" action="signup.php" onsubmit="return validate()">
<center>
<table style="border: none;">
<caption>

<h1 style="border: none;
opacity:0.7;">Sign Up </h1> </caption>
<tr> 
<td> 
    <br>
       
            <i style=" background:none;
    padding: 10px 12px;
   
    margin-right: 4px;" class="fas fa-signature"></i>
	<input type="text" id="idName" name="Name" placeholder="Your Name " style="height:44px;width:204px;background:white);">
		<br>
</tr>
<tr>
	<td> 
	<br>
        
        <i style=" background:none;
    padding: 10px 14px;
   
    margin-right: 4px;"  class="far fa-envelope"></i>
	<input type="email" id="idEmail" name="Email" placeholder="Email" 
	style="height:44px;width:204px;background:white);">
</tr>
<tr>

<td> 
	<br>
            <i style=" background:none;
    padding: 10px 17px;
   margin-right:4px;" class="fas fa-mobile-alt"></i>
	<input type="text" id="idMobile" name="Mobile" placeholder="Mobile" style="height:44px;width:205px;background:white);">
</tr>
<tr>
	<td>
	<br>
       
            <i style=" background:none;
    padding: 10px 14px;
   
    margin-right: 4px;"  class="far fa-calendar-check"></i>
	<input type="date" id="idDoB" name="DoB" placeholder="Date" style="height:44px;width:208px;background:white);">
</tr>
<tr>

	<td> <br>
       
            <i style=" background:none;
    padding: 10px 14px;
   
    margin-right: 4px;"  class="fas fa-lock"></i>
	<input type="password" id="idPass" name="Pass" placeholder="Password" style="height:44px;width:208px;background:white);">
</tr>
<tr>
	<td> 
	<br>
        
            <i style=" background:none;
    padding: 10px 14px;
   
    margin-right: 4px;"  class="fas fa-key"></i>
	<input type="password" id="idCPass" onblur="checkPass(this)" name="cpass" placeholder="Confirm Password" style="height:44px;width:208px;background:white);">
</tr>
<tr>
	<td> <div id="msg" style="color:red"> </div>
</tr>

<tr>
	<td><br><input type="submit" value="Sign Up"style="height:44px;width:30%; margin: 0px 50px ;background:white);">
	<input type="reset" value="Clear"style="height:44px;width:30%;
	background:white);">
</tr>
</table>

</form>
</center>
</div>
</body>