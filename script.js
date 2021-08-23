var x = 0;

function test()
{
    document.getElementById("rec").innerHTML = recursion(2048);
}

function func()
{
    x++;
    console.log(x);
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

function recursion(z)
{
    if(z == 1)
    {
        return(1);
    }
    else
    {   
        console.log(z);
        return z + " " + recursion(z/2);
        
    }
}