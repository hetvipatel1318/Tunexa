<html>
<head>
	 <meta charset="UTF-8"> 
	
	<script type="text/javascript" src="/eel.js"></script>
	<link rel="stylesheet" type="text/css" href="header.css">
	<link rel="stylesheet" type="text/css" href="song.css">
	<link rel="stylesheet" type="text/css" href="player.css">
	<style>
	::-webkit-scrollbar 
	{
       display: none;
    }
	body{
		margin: 0;
	}
	</style>
</head>
<body>
<script src="code.js"></script>

<div id="queue"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Queue<input type="button" id="next" onclick="nextsong()"><hr></div>

	<div id="third">
		<div id="emoji"></div>
		<div id="xyz">
		&nbsp;&nbsp;&nbsp;Playing :&nbsp;&nbsp;
		<label id="sname" align="center">none</label></div>
		<div id="mod">mode : Queue-mode <input type="radio" name="mode" checked="checked" onclick="setmod(this)" value="1"> &nbsp;&nbsp;Emotion-mode <input type="radio" name="mode" onclick="setmod(this)" value="2"> &nbsp;&nbsp;Random-mode 
			<input type="radio" name="mode" onclick="setmod(this)" value="3"></div>
		<audio controls id="main_slider">
  		<source id="sel"  type="audio/mpeg">
Your browser does not support the audio element.
		</audio>

		<script>
	document.getElementById("main_slider").onended=function(){
		if(mod==1)
			next_in_Q();
		else if(mod==2){
			getTime();
		}
		else
			rand_play();

	};


		</script>
		</div>
</body>