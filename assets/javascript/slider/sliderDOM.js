import Slider from './slider.js'

let sliderTitle = document.querySelector("#slider-title")
let sliderSubTitle = document.querySelector("#slider-subtitle")
let sliderText = document.querySelector("#slider-text")
let sliderImage = document.querySelector("#slider-image")



let slider = new Slider({
	elements: [
		{
			title: 'Lorem Ipsum',
			subtitle: 'Ipsum',
			image: 'images/3.jpg',
			text: 'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Facilis, autem totam distinctio, repellendus consequuntur id. Neque sint, tempore eius veniam consequuntur repellendus, inventore quasi voluptatibus aliquid cupiditate eligendi dignissimos dolorem?'
		},
		{
			title: 'Sit Amet',
			subtitle: 'Adipisicing',
			image: 'images/5.jpg',
			text: 'Facilis, autem totam distinctio, repellendus consequuntur id. Neque sint, tempore eius veniam consequuntur repellendus, inventore quasi voluptatibus aliquid cupiditate eligendi dignissimos dolorem?'
		},
		{
			title: 'Voluptatum Laudantium',
			subtitle: 'Aet consectetur',
			image: 'images/7.jpg',
			text: 'Sequi eaque voluptatum laudantium, iusto non. Minima, natus laborum architecto sequi qui sint ipsum ducimus, doloremque, laudantium molestias, deleniti sapiente minus hic.'
		},
	],
	animationFunc: function(element){
		sliderTitle.innerHTML = element.title;
		sliderSubTitle.innerHTML = element.subtitle;
		sliderText.innerHTML = element.text;
		sliderImage.src = element.image;

		console.log(element.title);
		console.log(element.image);
	},
	speed: 2000
});



slider.play();

// setTimeout(slikbder.stop,5000)