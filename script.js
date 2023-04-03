function rob(){
  document.getElementById("plop").innerHTML =  "Robbie you are trash";
  setTimeout(() => { document.getElementById("plop").innerHTML =  "";  }, 1000);
}

function alan() {
  document.getElementById("plop").innerHTML =  "Grayson you are trash";
  setTimeout(() => { document.getElementById("plop").innerHTML =  "";  }, 1000);
}




 function slideOne(){
 document.getElementById("plop").innerHTML =  "hola";
   
    }


 function slideTwo(){
   document.getElementById("plop").innerHTML = "New text!";
    }
















document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      console.log('Checked');
       var element = document.getElementById("topbar");
        element.style.opacity = "0.0";
    } else {
      // do that
      console.log('Not checked');
       var element = document.getElementById("topbar");
        element.style.opacity = "1.0";
    }
  });
});




const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");

const buttonPressed = e => { 
  result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}
