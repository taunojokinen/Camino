export class Vaihtaja {

const cityButton = document.getElementsByClassName("buttonChangeImage")[1];
let cityIndex = 0;

const imageButton = document.getElementsByClassName("buttonChangeImage")[0];
let imageIndex = -1;
let timerReset = false

cityButton.addEventListener('click', function() {
	cityIndex++;
    if (cityIndex == city.length) {
        cityIndex = 0;
    }
	
    document.getElementById("city").innerHTML = city[cityIndex];
	document.getElementById("cityButton").innerHTML = nextCity[cityIndex]
	imageIndex=0;
	change();
      });cityButton.addEventListener('click', function() {
		cityIndex++;
		if (cityIndex == city.length) {
			cityIndex = 0;
		}
		
		document.getElementById("city").innerHTML = city[cityIndex];
		document.getElementById("cityButton").innerHTML = nextCity[cityIndex]
		imageIndex=0;
		change();
		  });

imageButton.addEventListener('click', function(){imageButtonPressed();});

}