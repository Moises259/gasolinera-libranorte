$(document).ready(function(){

	
	$('.carousel-demo').jR3DCarousel({

		width : 1000,       
  		height: 550,   
  		slideClass:	'slide',
  		animation:"slide3D"

	});

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();

	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});



});