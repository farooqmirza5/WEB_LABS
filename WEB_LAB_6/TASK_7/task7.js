var txtarea=document.getElementById('input');
let obj = {
    My: 'Name',
    is: 'Farooq',
    the: 'Mirza'
  }
  'My Name is Farooq Mirza'
  
function check(){
       txtarea.value=`My ${obj.My} is ${obj.is} the ${obj.the}`;    
}