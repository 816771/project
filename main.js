var currentSlide = 0;






function Lbozo(){
  var mysound = document.getElementById("mysound");
      mysound.autoplay = 'true';
      mysound.load();
}

async function alan() {
  document.getElementById("plop").innerHTML =  "Grayson you are trash" + "<br>" + "L bozo";
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

 document.getElementById("plop").innerHTML = "In febuary of 2020 a fatal shooting occured causing the death of 25 year old Ahmaud Arbery causing a national debate over racial profiling and vigilantism." + "<br>" + "<br>" + "The jogger Ahamaud had been jogging in brunswick, Georgia when Gregory McMichael, 65 years old, his son, Travis McMichael, 35 years old, and their neighbor, William Bryan Jr., 52 years old, had chased him in pickuptrucks and shot him." + "<br>" + "<br>" + "The men had used many things for defence such as calling it an attempt to make a citizen`s arrest as well as Travis McMichael saying he was acting in \"self defence\" and that Ahrbery had shot first and in his final moments had lunged at Travis" + "<br>" + "<br>" + "";
    }


 function slideTwo(){
  currentSlide = 2;

   document.getElementById("plop").innerHTML = "";
    }

function slideThree() {
  currentSlide = 3;

  document.getElementById("plop").innerHTML = "";
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



