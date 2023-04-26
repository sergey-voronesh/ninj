'use strict';

// инициализация Свайпера
const mySlider = new Swiper('.slider-gallery__container', {
	// НАСТРОЙКИ


	simulateTouch: false, // переключение перетаскиванием мыши

	// автовысота
	// autoHeight: true, // подстаривает слайдер под размер контента

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: false,

	allowTouchMove: false,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 59,

	//стартовый слайд
	initialSlide: 59,

	// бесконечна прокрутка
	// loop: true,

	autoplay: {
		// пауза между прокруткой
		delay: 0,
		// закончить на последнем слайде
		stopOnLastSlide: true,
		// откл. после взятия ручного управления
		disableOnInteraction: false,
		reverseDirection: true,
		waitForTransition: false,
	},

	// скорость прокрутки слайдов
	speed: 220000,

	// брейкпоинты (адаптив, ширина)
	breakpoints: {
		480: {
			slidesPerView: 2.4,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 4.2,
			spaceBetween: 10,
		},
		1440: {
			slidesPerView: 5.2,
			spaceBetween: 30,
		},
		1920: {
			slidesPerView: 4.8,
			spaceBetween: 70,
		},
		5000: {
			slidesPerView: 6.4,
			spaceBetween: 70,
		}
	},

});
const mySlider4 = new Swiper('.slider-gallery2__container', {
	// НАСТРОЙКИ


	simulateTouch: false, // переключение перетаскиванием мыши

	allowTouchMove: false,

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: false,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 59,

	//стартовый слайд
	initialSlide: 0,

	autoplay: {
		// пауза между прокруткой
		delay: 0,
		// закончить на последнем слайде
		stopOnLastSlide: true,
		// откл. после взятия ручного управления
		disableOnInteraction: false,
		waitForTransition: false,
	},

	// скорость прокрутки слайдов
	speed: 220000,

	// брейкпоинты (адаптив, ширина)
	breakpoints: {
		480: {
			slidesPerView: 2.4,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 4.2,
			spaceBetween: 10,
		},
		1440: {
			slidesPerView: 5.2,
			spaceBetween: 30,
		},
		1920: {
			slidesPerView: 4.8,
			spaceBetween: 70,
		},
		5000: {
			slidesPerView: 6.4,
			spaceBetween: 70,
		}
	},

});

// инициализация Свайпера
const mySlider2 = new Swiper('.nft-slider__container', {
	// НАСТРОЙКИ

	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку
	slideToClickedSlide: true, // свайп по щелчку на изображении

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// управление с помощью колеса мыши
	// mousewheel: {
	// 	sensitivity: 1, // чувствительноe6сть машины
	// 	eventsTarget: '.nft-slider__container' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
	// },

	// автовысота
	autoHeight: true, // подстаривает слайдер под размер контента

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 2,

	// скорость прокрутки слайдов
	speed: 400,

	// отступы
	spaceBetween: 1,

	// бесконечная прокрутка слайдера
	loop: false,

	// активный слайд по центру
	centeredSlides: true,

	// кол-во показанных слайдов
	slidesPerView: 2,

	breakpoints: {
		480: {
			slidesPerView: 1.4,
		},
	}

});

const mySlider3 = new Swiper('.cases-slider__container', {
	// НАСТРОЙКИ

	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку
	slideToClickedSlide: true, // свайп по щелчку на изображении

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// автовысота
	autoHeight: true, // подстаривает слайдер под размер контента

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 1,

	// скорость прокрутки слайдов
	speed: 400,

	// отступы
	spaceBetween: 1,

	// бесконечная прокрутка слайдера
	loop: false,

	// активный слайд по центру
	// centeredSlides: true,

	// кол-во показанных слайдов
	slidesPerView: 1,

});

const btnOne = document.querySelector('.cases-slider__btn_1');
const btnTwo = document.querySelector('.cases-slider__btn_2');
const btnThree = document.querySelector('.cases-slider__btn_3');

if (btnOne) {
	btnOne.addEventListener('click', function (e) {
		e.preventDefault();
		mySlider3.slideTo(0, 800);
	});
}
if (btnTwo) {
	btnTwo.addEventListener('click', function (e) {
		e.preventDefault();
		mySlider3.slideTo(1, 800);
	});
}
if (btnThree) {
	btnThree.addEventListener('click', function (e) {
		e.preventDefault();
		mySlider3.slideTo(2, 800);
	});
}