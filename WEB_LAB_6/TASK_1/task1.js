var power=document.getElementById('input1');
var volume=document.getElementById('input2');
var btn=document.getElementById('btn');
function calculatepower()
{
    if(power.value.length>0)
    {
        const result=Math.pow(power.value,100);
        volume.value=result;
        power.value='';
    }   
}