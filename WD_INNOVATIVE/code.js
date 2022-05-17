var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Shaam Shaandaar Shaandaar Shahid Kapoor _ Alia Bhatt Amit Trivedi.mp3"
,"songs\\Haan Main Galat - Love Aaj Kal Ft. Arijit Singh Kartik, Sara Pritam.mp3"
,"songs\\Jiya Re Song with Jab Tak Hai Jaan Shah Rukh Khan Anushka Sharma Gulzar.mp3"
,"songs\\Kapoor _ Sons – Kar Gayi Chull Sidharth Alia Badshah Amaal Mallik Fazilpuria.mp3"
,"songs\\Najaa Sooryavanshi Akshay Kumar, Katrina K, Rohit Shetty, Tanishk, Pav Dharia, Nikhita.mp3"
,"songs\\Ghungroo Full Song WAR Hrithik, Vaani, Arijit Singh, Shilpa Vishal _ Shekhar, Kumaar.mp3"
,"songs\\Sooraj Dooba Hai Full Song - ROY(2014) Arijit Singh, Aditi Singh Sharma.mp3"
,"songs\\Ae Dil Hai Mushkil Title Track Full Video - Ranbir, Anushka, Aishwarya Arijit Pritam.mp3"
,"songs\\Agar Tum Saath Ho Song with Tamasha Ranbir Kapoor, Deepika Padukone T-Series.mp3"
,"songs\\Soch Na Sake FULL VIDEO SONG AIRLIFT Akshay Kumar, Nimrat Kaur Arijit Singh, Tulsi Kumar.mp3"
,"songs\\Hawayein - Jab Harry Met Sejal Shah Rukh Khan, Anushka Arijit Singh Pritam.mp3"
,"songs\\Aao Milo Chalen Jab We Met Shahid Kapoor,Kareena Kapoor Pritam, Shaan, Ustad Sultan Khan.mp3"
,"songs\\Zindagi do pal ki (KITES) - with.mp3"
,"songs\\Duaa - Shanghai (2012) - Full Song.mp3"
,"songs\\Iktara Best Audio Song - Wake Up Sid Ranbir Kapoor Konkona Sen Kavita Seth Javed Akhtar.mp3"
,"songs\\Manchala - Hasee Toh Phasee Official Bollywood Shafqat Amanat Ali Nupur Pant.mp3"
,"songs\\Manwa Laage FULL SONG with Happy New Year Shah Rukh Khan Arijit Singh.mp3"
,"songs\\Mast Magan 2 States (2014) Full Song Story HD Arijit Singh _ Chinmayi Sripada.mp3"
,"songs\\Mitwa - Kabhi Alvida Naa Kehna Official Bollywood Shafqat Amanat Ali.mp3"
,"songs\\SUBHANALLAH (FULL SONG) YEH JAWAANI HAI DEEWANI PRITAM RANBIR KAPOOR, DEEPIKA PADUKONE.mp3"
,"songs\\A.R. Rahman - Tum Tak Best Raanjhanaa Sonam Kapoor Dhanush Javed Ali.mp3"
,"songs\\Jee Karda (Official Full Song) Badlapur Varun Dhawan _ Yami Gautam.mp3"
,"songs\\AARAMBH.mp3"
,"songs\\Chhil Gaye Naina Full Song with NH10.mp3"
,"songs\\MILA TOH MAREGA.mp3"
,"songs\\Sadda Haq Video Song Rockstar Ranbir Kapoor Mohit Chauhan A.R. Rahman.mp3"
,"songs\\Sarkar 3 - Angry Mix Full Song Audio Sukhwinder Singh _ Mika Singh.mp3"
,"songs\\Mera Intkam Dekhegi - Shaadi Mein Zaroor Aana Rajkummar R, Kriti K Krishna Beuraa.mp3"];

var sname=["Shaam Shaandaar",
"Haan Main Galat",
"Jiya Re",
"Kar Gyi Chull",
"Naajaa",
"Ghungroo",
"Sooraj Dooba Hai",
"Ae Dil Hai Mushkil",
"Agar Tum Saath Ho",
"Soch Na Sake",
"Hawayein",
"Aao Milo Chalen",
"Zindagi do pal ki",
"Duaa",
"Iktara",
"Manchala",
"Manwa Laage",
"Mast Magan",
"Mitwa",
"Subhanallah",
"Tum Tak",
"Jee Karda",
"AARAMBH",
"Chhil Gaye Naina",
"MILA TOH MAREGA",
"Sadda Haq",
"Angry Mix",
"Mera Intkam Dekhegi",
];

var sd=["Song: Shaam Shandaar<br>Movie: Shaandaar<br>Artist: Amit Trivedi"
,"Song: Haan Main Galat<br>Movie: Love Aaj Kal<br>Artist: Shashwat Singh, Arijit Singh"
,"Song: Jiya Re<br>Movie: Jab Tak Hain Jaan<br>Artist: Neeti Mohan"
,"Song: Kar Gyi Chull<br>Movie: Kapoor & Sons<br>Artist: Neha Kakkar, Badshah"
,"Song: Naja Naja<br>Movie: Sooryavanshi<br>Artist: Tanishk Bagchi, Nikhita Gandhi"
,"Song: Ghungroo<br>Movie: War<br>Artist: Arijit Singh"
,"Song: Sooraj Dooba Hai<br>Movie: Roy<br>Artist: Arijit Singh"
,"Song: Ae Dil Hai Mushkil<br>Movie: Ae Dil Hai Mushkil<br>Artist: Arijit Singh"
,"Song: Agar Tum Saath Ho<br>Movie: Tamasha<br>Artist: Arijit Singh, Alka Yagnik"
,"Song: Soch Na Sake<br>Movie: Airlift<br>Artist: Arijit Singh"
,"Song: Hawayein<br>Movie: Jab Harry Met Sejal<br>Artist: Arijit Singh"
,"Song: Aao Milo Chalen<br>Movie: Jab We Met<br>Artist: Shan, Sultan Khan"
,"Song: Zindagi do pal ki<br>Movie: Kites<br>Artist: KK"
,"Song: Duaa<br>Movie: Shanghai<br>Artist: Arijit Singh"
,"Song: Iktara<br>Movie: Wake Up Sid<br>Artist: Amit Trivedi, Kavita Seth"
,"Song: Manchala<br>Movie: Hasee Toh Phasee<br>Artist: Nupur Pant, Amanat Ali"
,"Song: Manwa Laage<br>Movie: Happy New Year<br>Artist: Arijit Singh, Shreya Ghoshal"
,"Song: Mast Magan<br>Movie: 2 States<br>Artist: Arijit Singh"
,"Song: Mitwa<br>Movie: Kabhi Alvida Naa Kehna<br>Artist: Shankar Mahadevan, Caralisa Monteiro"
,"Song: Subhanallah<br>Movie: Yeh Jawaani Hai Deewani<br>Artist: Shilpa Rao, Sreerama Chandra"
,"Song: Tum Tak<br>Movie: Raanjhanaa<br>Artist: Javed Ali, Pooja Vaidyanath"
,"Song: Jee Karda<br>Movie: Badlapur<br>Artist: Meher Vaani, Khan Saab"
,"Song: AARAMBH<br>Movie: Gullal<br>Artist: Piyush Mishra"
,"Song: Chhil Gaye Naina<br>Movie: NH10<br>Artist: Dipanshu Pandit, Kanika Kapoor"
,"Song: MILA TOH MAREGA<br>Movie: Rakht Charitra<br>Artist: Sandeep Patil, Vishvesh Parmar"
,"Song: Sadda Haq<br>Movie: Rockstar<br>Artist: Mohit Chauhan"
,"Song: Angry Mix<br>Movie: Sarkar 3<br>Artist: Mika Singh, Sukhwinder Singh"
,"Song: Mera Intkam Dekhegi<br>Movie: Shaadi Mai Zaroor Aana 3<br>Artist: Krishna Beuraa"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jfif",
"images\\\\5.jpg",
"images\\\\6.jfif",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jfif",
"images\\\\11.jpg",
"images\\\\12.jfif",
"images\\\\13.jpg",
"images\\\\14.jfif",
"images\\\\15.jfif",
"images\\\\16.jfif",
"images\\\\17.jpg",
"images\\\\18.jpg",
"images\\\\19.jpg",
"images\\\\20.jpg",
"images\\\\21.jfif",
"images\\\\22.jfif",
"images\\\\23.jfif",
"images\\\\24.jfif",
"images\\\\25.jfif",
"images\\\\26.jfif",
"images\\\\27.jfif",
"images\\\\28.jfif"];

var mood=[["22","23","24","25","26","27","28"],["1","2","3","4","5","6","7"],["8","9","10","11","12",",13","14"],["15","16","17","18","19","20","21"]];
var mmm=["2.png","2.png","2.png","2.png","2.png","2.png","2.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","1.png","1.png","1.png","1.png","1.png","1.png","1.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }