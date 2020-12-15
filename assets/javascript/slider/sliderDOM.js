import Slider from './slider.js';
import elements from './elements.js';

let sliderTitle = document.querySelector("#slider-title")
let sliderSubTitle = document.querySelector("#slider-subtitle")
let sliderText = document.querySelector("#slider-text")
let sliderImage = document.querySelector("#slider-image")
let textContent = document.querySelector("#slider-text-content");


let slider = new Slider({
	elements,
	animationFunc: function(element){

		textContent.classList.add("hide");
		sliderImage.classList.add("hide");

		setTimeout(function(){
			sliderTitle.innerHTML = element.title;
			sliderSubTitle.innerHTML = element.subtitle;
			sliderText.innerHTML = element.text;
			sliderImage.src = element.image;

			textContent.classList.remove("hide");
			sliderImage.classList.remove("hide");
		},600);


	},
	speed: 5500
});



slider.play();
