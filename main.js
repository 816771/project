var currentSlide = 0;






function Lbozo(){
  var mysound = document.getElementById("mysound");
      mysound.autoplay = 'true';
      mysound.load();
}

async function alan() {
  document.getElementById("plop").innerHTML =  "Grayson you are trash";
  await new Promise(done => setTimeout(() => done(), 1000));
  if(currentSlide == 0)
  document.getElementById("plop").innerHTML = "";
else if(currentSlide == 1)
  slideOne();
else if(currentSlide == 2)
  slideTwo();
}




 function slideOne(){
  currentSlide = 1;

 document.getElementById("plop").innerHTML = "";
   
    }


 function slideTwo(){
  currentSlide = 2;

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



