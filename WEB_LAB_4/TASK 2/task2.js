
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
document.write("<b>Original Array:</b>"+array +"<br>");
array.shift();
document.write("<b>1)Using Shift: </b>"+array +"<br>");
array.sort();
document.write("<b>2)Using Sort: </b>"+array+ "<br>");
array.push("kiwi");
document.write("<b>3)Using Push: </b>"+array +"<br>");
array.shift();
document.write("<b>4)Using Shift: </b>"+array+ "<br>");
array.reverse();
document.write("<b>5)Using Reverse: </b>"+array+ "<br>");
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.splice(1,1);
document.write("<b>6)Using Splice Method: </b>"+array+ "<br>");