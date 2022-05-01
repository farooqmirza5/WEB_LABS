var check=document.getElementById('input');
function cases()
{
    if(check.value.length>0)
    {
        switch (check.value) {
            case "1":
             alert("I am Using Opera browser")
              break;
            case "2":
                alert("I am Using Chrome browser")
              break;
            case "3":
                alert("I am Using Tor browser")
              break;
            case "4":
                alert("I am Using Firefox browser")
              break;
            default:
            alert("Enter Value Between 1 to 4")
            break;
          }
        check.value='';
    }   
}