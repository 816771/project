var currentSlide = 0;






function Lbozo(){
  var mysound = document.getElementById("mysound");
      mysound.autoplay = 'true';
      mysound.load();
      document.getElementById("plop").innerHTML = '<img src="552.png" alt="syrup" id="pic3" >';
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
else if(currentSlide == 3)
  slideThree();
}











 function slideOne(){
  currentSlide = 1;

 document.getElementById("plop").innerHTML = "In febuary of 2020 a fatal shooting occured causing the death of 25 year old Ahmaud Arbery causing a national debate over racial profiling and vigilantism." + "<br>" + "<br>" + "The jogger Ahamaud had been jogging in brunswick, Georgia when Gregory McMichael, 65 years old, his son, Travis McMichael, 35 years old, and their neighbor, William Bryan Jr., 52 years old, had chased him in pickuptrucks and shot him." + "<br>" + "<br>" + "The men had used many things for defence such as calling it an attempt to make a citizen`s arrest as well as Travis McMichael saying he was acting in \"self defence\" and that Ahbery had shot first and in his final moments had lunged at Travis" + "<br>" + "<br>" + "";
    }


 function slideTwo(){
  currentSlide = 2;

   document.getElementById("plop").innerHTML = "The offenders were not being charged individually, 'but as parties concerned in the commission of a crime.' which meant if one of them was convicted they would all be." + "<br>" + "<br>" + "The way to have the men convicted would be to show that there was no reason to suspect Ahmaud of a felony, which would make it to where they had not made a citizens arrest, but first degree murder." + "<br>" + "<br>" + "In less than two days, the jurors, eleven white and one black, had convicted the trio of murder on november 24, 2021, with a life sentence in prison. The men were also convicted of aggravated assault, false imprisonment and criminal attempt to commit a felony.";
    }

function slideThree() {
  currentSlide = 3;

  document.getElementById("plop").innerHTML = "Theawanza Brooks, one of Arbery's aunts, as well as Ahmauds mom, Wanda Cooper-Jones, had celebrated hard when the men were convicted including things such as wearing a orange jumpsuit that said justice served and having a celebration ralley outside the courthouse with over 150 people." + "<br>" + "<br>" + "The death also caused thousands of people across the nation to take part in #IRunWithMaud solidarity jogs. It also lead to Georgia's staunchly Republican governor, Bryan Kemp, to sign into law the state's first hate-crimes bill and repeal the state's Civil War-era citizen's arrest law.";
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



