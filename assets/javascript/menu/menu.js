// Scrolling animation function
function scrollToElement(element) {
	window.scrollTo({
		'behavior': 'smooth',
		'top':element.offsetTop
	});
}

// Show menu
document.querySelector(".menu")
	.addEventListener("click",function(){
		document.querySelector(".menu-screen").classList.add("active");
	});

// Hide menu boton
document.querySelector(".close")
	.addEventListener("click",function(){
		document.querySelector(".menu-screen").classList.remove("active");
	});

// Hide menu on click link
let links = document.querySelectorAll(".menu-screen a");

links.forEach(link => {
	link.addEventListener('click',function(e){
		document.querySelector(".menu-screen").classList.remove("active");

		let paths = this.href.split("/");

		const selector = paths[paths.length -1];

		if(window.scrollTo) e.preventDefault()

		scrollToElement(document.querySelector(selector));

		return !!window.scrollTo;

	})
})