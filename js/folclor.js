$(document).ready(function(){
	var p_footer = $('footer .footer-copyright .contain');
	
	var elems = document.querySelectorAll('.sidenav');
	M.Sidenav.init(elems);

	$('.center').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		autoplay: true,
	    dots: true,
	      infinite: true,
	      speed: 500,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: false,
		        centerPadding: '0px',
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	var _date = new Date();

	//Para el copyright en el pie de pagina
	p_footer.prepend(`© ${_date.getFullYear()} Copyright `);
})