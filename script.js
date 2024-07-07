

function showSidebar(event){
	event.preventDefault();
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}

function hideSidebar(event){
	event.preventDefault();
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
let currentSlide = 0;

function toggleSidebar(event){
	event.preventDefault();
	const sidebar = document.querySelector('.sidebar')
	const aboutLink = document.querySelector('#about-link'); // assume the About link has an ID of "about-link"
	
	if(sidebar.style.display === 'none'){
	sidebar.style.display = 'flex'
	} else {
	sidebar.style.display = 'none'
	}
	
	if(event.target === aboutLink){
	sidebar.style.display = 'none'
	}
	}
	

setInterval(() => {
	slides[currentSlide].style.transform = 'translateX(-100%)';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].style.transform = 'translateX(0%)';
}, 8000); /* increased the interval to 8 seconds */

 function donateAlert() {
    alert("Thank you for donating! Your support is greatly appreciated.");
  }



