/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/******************************************************************************************************************************
Google Map Embed
*******************************************************************************************************************************/

$(function() {
	var mapContainer = document.getElementById('googlemaps');

	if (!mapContainer) {
		return;
	}

	var locationLabel = mapContainer.getAttribute('data-location') || 'London, United Kingdom';
	var mapUrl = mapContainer.getAttribute('data-map-url');

	if (!mapUrl) {
		mapUrl = 'https://www.google.com/maps?q=' + encodeURIComponent(locationLabel) + '&z=12&output=embed';
	}

	mapContainer.innerHTML = '<iframe title="Google Map showing ' + locationLabel + '" src="' + mapUrl + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
});

/******************************************************************************************************************************
Portfolio More Projects Modal
*******************************************************************************************************************************/

$(function() {
	var moreButton = document.getElementById('portfolioMoreButton');
	var moreModal = document.getElementById('portfolioMoreModal');
	var closeButton = document.getElementById('portfolioMoreClose');

	if (!moreButton || !moreModal || !closeButton) {
		return;
	}

	function setPortfolioModalState(isOpen) {
		moreModal.classList.toggle('is-open', isOpen);
		moreModal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
		moreButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		document.body.classList.toggle('portfolio-modal-open', isOpen);
	}

	moreButton.addEventListener('click', function() {
		setPortfolioModalState(true);
	});

	closeButton.addEventListener('click', function() {
		setPortfolioModalState(false);
	});

	moreModal.addEventListener('click', function(event) {
		if (event.target && event.target.getAttribute('data-portfolio-close') === 'true') {
			setPortfolioModalState(false);
		}
	});

	document.addEventListener('keydown', function(event) {
		if (event.key === 'Escape' && moreModal.classList.contains('is-open')) {
			setPortfolioModalState(false);
		}
	});
});


$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125
				}, 1000);
				return false;
			}
		}
	});

});

/******************************************************************************************************************************
Nav Transform
*******************************************************************************************************************************/ 

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/******************************************************************************************************************************
Flexsliders
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('#blogSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
		$('#clientSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});
