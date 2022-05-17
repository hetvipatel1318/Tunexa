<html>
<head>
<title> Marquee </title>
</head>
<body>
<label id="lblGreetings" style="color:white;font-family:Times New Roman;font-size:20px"></label>
<br><br><br>
<marquee behavior="scroll" direction="left" style="color:Yellow;font-family:Times New Roman;font-size:50px">TOP HITS INDIA</marquee>
<br><br><br>
<marquee behavior="scroll" direction="left" style="color:white;font-family:Times New Roman;font-size:35px">All Latest Bollywood Hits</marquee>
</body>

<script>
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '' + greet + ' and Welcome to Tunexa!';
</script>