function myFunction() {
    let person = prompt("Yeah i know, alert boxes suck.", "");
    if (person === "1234") {
        document.getElementById("link").href="main.html";
        document.getElementById("link").innerHTML ="Actual Knowledge";
    }
}