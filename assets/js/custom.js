(function ($) {
	"use strict";

	// Page loading animation
	$(window).on('load', function () {

		$('#js-preloader').addClass('loaded');

	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var introduceOffset = $('#introduce').offset().top;
		
		if (scroll >= introduceOffset) {
			$(".header-area").addClass("header-active");
			$(".header-area .logo .logo-img").attr("src", "./assets/images/logo/1.png");
			$(".header-area .main-nav .nav li a:not(.meet):not(.active)").addClass("doimauchu");
		} else {
			$(".header-area").removeClass("header-active");
			$(".header-area .logo .logo-img").attr("src", "./assets/images/logo/5.png");
			$(".header-area .main-nav .nav li a:not(.meet):not(.active)").removeClass("doimauchu");
		}
	});
	// Removed owl-carousel initialization:
	// $('.owl-banner').owlCarousel({...});

	var width = $(window).width();
	$(window).resize(function () {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	// const elem = document.querySelector('.properties-box');
	// const filtersElem = document.querySelector('.properties-filter');
	// if (elem) {
	// 	const rdn_events_list = new Isotope(elem, {
	// 		itemSelector: '.properties-items',
	// 		layoutMode: 'masonry'
	// 	});
	// 	if (filtersElem) {
	// 		filtersElem.addEventListener('click', function (event) {
	// 			if (!matchesSelector(event.target, 'a')) {
	// 				return;
	// 			}
	// 			const filterValue = event.target.getAttribute('data-filter');
	// 			rdn_events_list.arrange({
	// 				filter: filterValue
	// 			});
	// 			filtersElem.querySelector('.is_active').classList.remove('is_active');
	// 			event.target.classList.add('is_active');
	// 			event.preventDefault();
	// 		});
	// 	}
	// }


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});


	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	new WOW().init();

	// customcarousel

	//step 1: get DOM
	// Chọn phần tử bằng jQuery
	let $nextDom = $('#next');
	let $prevDom = $('#prev');
	let $carouselcustomDom = $('.carouselcustom');
	let $SliderDom = $carouselcustomDom.find('.list');
	let $thumbnailBorderDom = $carouselcustomDom.find('.thumbnail');
	let $thumbnailItemsDom = $thumbnailBorderDom.find('.item');
	let $timeDom = $carouselcustomDom.find('.time');

	// Thêm phần tử đầu tiên vào thumbnail
	$thumbnailBorderDom.append($thumbnailItemsDom.first());

	// Khai báo thời gian
	let timeRunning = 500;
	let timeAutoNext = 4000;

	// Gắn sự kiện click bằng jQuery
	$nextDom.on('click', function () {
		showSlider('next');
	});

	$prevDom.on('click', function () {
		showSlider('prev');
	});

	// Biến để quản lý timeout
	let runTimeOut;
	let runNextAuto = setTimeout(() => {
		$nextDom.click(); // Gọi sự kiện click bằng jQuery
	}, timeAutoNext);

	// Hàm xử lý slider
	function showSlider(type) {
		let $SliderItemsDom = $SliderDom.find('.item');
		let $thumbnailItemsDom = $thumbnailBorderDom.find('.item');

		if (type === 'next') {
			$SliderDom.append($SliderItemsDom.first()); // Thêm phần tử đầu tiên vào cuối
			$thumbnailBorderDom.append($thumbnailItemsDom.first());
			$carouselcustomDom.addClass('next'); // Thêm class 'next'
		} else {
			$SliderDom.prepend($SliderItemsDom.last()); // Thêm phần tử cuối cùng lên đầu
			$thumbnailBorderDom.prepend($thumbnailItemsDom.last());
			$carouselcustomDom.addClass('prev'); // Thêm class 'prev'
		}

		// Xóa timeout cũ và đặt timeout mới để xóa class
		clearTimeout(runTimeOut);
		runTimeOut = setTimeout(() => {
			$carouselcustomDom.removeClass('next prev'); // Xóa cả hai class cùng lúc
		}, timeRunning);

		// Tự động chuyển slide tiếp theo
		clearTimeout(runNextAuto);
		runNextAuto = setTimeout(() => {
			$nextDom.click();
		}, timeAutoNext);
	}
	document.addEventListener("DOMContentLoaded", function () {
		const images = document.querySelectorAll("img[data-src]");

		const imageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src; // Gán đường dẫn từ data-src sang src
					img.removeAttribute("data-src"); // Xóa data-src sau khi tải
					observer.unobserve(img); // Ngừng theo dõi phần tử
				}
			});
		});

		images.forEach(img => imageObserver.observe(img));
	});
	
	// VIDEO

})(window.jQuery);