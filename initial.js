var a = Math.floor(Math.random() * (2 - 1 + 1) ) + 1;

if(a == 1)
{
   var password = "grayson_sucks";
}
else if(a == 2)
{
    var password = "robbie_sucks";
}




function nopode() {

    document.getElementById("flip").innerHTML = a ;
}




function myFunction() {
    let person = prompt("Yeah i know, alert boxes suck.", "");
    if (person === password) {
        document.getElementById("link").href="main.html";
        document.getElementById("link").innerHTML ="Actual Knowledge";
    }
}