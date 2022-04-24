document.write("<b>1)Object </b><br>");
var persondetails = {
    username: "Tom",
    password: "Tom123"
  };
document.writeln("<br><b>UserName Object:</b>"+persondetails.username +'<br>')
document.writeln("<b>Password Object:</b>"+persondetails.password +'<br>')
document.write("<br><b>2)Array</b> <br>"); 
var database=[persondetails]

document.writeln("<br>"+ database[0].username +"<br>")
document.writeln( database[0].password +"<br>")

var newsfeed=[{
    usernmae:'Farooq',
    timeline:'Actice'
},
{
    usernmae:'Basit',
    timeline:'Not Active'
},
{
    usernmae:'Haris',
    timeline:'Actice'
}]
document.write("<br><b>3)Array Of An Object</b> <br>");
document.write("UserName:"+newsfeed[0].usernmae +"<br>"+ "TimeLine:"+newsfeed[0].timeline+"<br> <br>")
document.write("UserName:"+newsfeed[1].usernmae +"<br>"+ "TimeLine:"+newsfeed[1].timeline+"<br><br> ")
document.write("UserName:"+newsfeed[2].usernmae +"<br>"+ "TimeLine:"+newsfeed[2].timeline+"<br><br>")
