var x = 0;

function func()
{
    x++;
    if(x % 2 == 1)
    {
        document.getElementById("hello").innerHTML = "HELLO WORLD!";
        document.getElementById("hello").style.color = "red";
    }
    else
    {
        document.getElementById("hello").innerHTML = "Hello World!";
        document.getElementById("hello").style.color = "blue";
    }
}
var y = 2048;
var w = "";
function recursion(z)
{
    if(z == 1)
    {
        document.getElementById("rec").innerHTML = w;
    }
    else
    {   
        
        document.getElementById("rec").innerHTML = "Please wait...";
        w += recursion(z/2);
    }
}