var num1=document.getElementById('input1');
var num2=document.getElementById('input2');
var result=document.getElementById('input3');
function addedarray(){
const numbers = [0,1,2,3,4,5]; 
result.value=" ";
if(num1.value.length>0 && num2.value.length>0)
{
    const sum = parseInt (num1.value) + parseInt ( num2.value) ;    
    for (var i= 0; i < numbers.length; i++) {

        if (numbers[i]===sum) {
            result.value="The sum of user input matche the target:"+numbers[i];
        break;
        }
        else{
            result.value="The sum user input doesnot match any target in array"
        }
        }
} 
num1.value=" ";
num2.value=" ";
        }