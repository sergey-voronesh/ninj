'use strict';

// меню бургер

const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.menu');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
};

// прокрутка до нужного раздела при клике

const links = document.querySelectorAll('a[data-goto]');

if (links.length > 0) {
	links.forEach(link => {
		link.addEventListener('click', onlinkClick);
	});

	function onlinkClick(e) {
		const link = e.target;
		if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
			const gotoBlock = document.querySelector(link.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY + 3;

			if (iconMenu.classList.contains('_active')) {
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				document.body.classList.remove('_lock');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		};

	}
};

// RAFFLE HOUSE TABS

const tabItem = document.querySelectorAll('.tabs__item');
const tabBody = document.querySelectorAll('.tabs__block');

if (tabItem && tabBody) {
	for (let i = 0; i < tabItem.length; i++) {
		tabItem[i].addEventListener("click", function (e) {
			e.preventDefault();
			let activeTabAttr = e.target.getAttribute("data-tab");

			for (let j = 0; j < tabItem.length; j++) {
				let contentAttr = tabBody[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					tabItem[j].classList.add("_active");
					tabBody[j].classList.add("_active");
				} else {
					tabItem[j].classList.remove("_active");
					tabBody[j].classList.remove("_active");
				}
			};
		});
	};
};

// RAFFLE HOUSE COUNTER

const plus = document.querySelectorAll('.raffle-item__action_plus');
const minus = document.querySelectorAll('.raffle-item__action_minus');

if (plus.length > 0) {
	plus.forEach(el => {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			let inputCount = e.target.nextElementSibling;
			let count = Number(inputCount.value);
			let newCount = count + 1;
			inputCount.value = newCount;
			minus.forEach(el => {
				el.classList.add('_active');
			});
		});
	});
};

if (minus.length > 0) {
	minus.forEach(el => {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			let inputCount = e.target.previousElementSibling;
			let count = Number(inputCount.value);
			let newCount = count - 1;
			inputCount.value = newCount;
			if (newCount < 2) {
				minus.forEach(el => {
					el.classList.remove('_active');
				});
			}
		});
	});
};

// анимация открытия боксов

const btnSpin = document.querySelector('.cases-slider__btn_spin');
const btnClaim = document.querySelector('.cases-slider__btn_claim');
const mainSlider = document.querySelector('.cases-slider__content');
const openCaseBlock = document.querySelector('.open-case');
const hiddenText = document.querySelector('.cases-slider__text');
const openCaseIndicators = document.querySelectorAll('.open-case__indicator');
const openCaseLoding = document.querySelector('.open-case__opening');
const animationPopup = document.querySelector('.popup');

function openCaseLodingHidden() {
	openCaseLoding.classList.remove('_active');
};


function btnClaimVisible() {
	btnClaim.classList.add('_active');
};

function openCasePopup() {
	animationPopup.classList.add('open');
}

if (btnSpin) {
	btnSpin.addEventListener('click', function (e) {
		e.preventDefault()
		mainSlider.classList.add('_hidden');
		hiddenText.classList.add('_hidden');
		openCaseBlock.classList.add('_active');
		openCaseIndicators.forEach(el => {
			el.classList.add('_active');
		});
		openCaseLoding.classList.add('_active');
		setTimeout(btnClaimVisible, 9000);
		setTimeout(openCaseLodingHidden, 9000);
	});
	btnClaim.addEventListener('click', function (e) {
		e.preventDefault();
		openCasePopup();
	});
	const popupBtnOkay = document.querySelector('.popup__btn-ok');
	popupBtnOkay.addEventListener('click', function (e) {
		mainSlider.classList.remove('_hidden');
		hiddenText.classList.remove('_hidden');
		openCaseBlock.classList.remove('_active');
		btnClaim.classList.remove('_active');
		openCaseIndicators.forEach(el => {
			el.classList.remove('_active');
		});
	});
};



// popup

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding'); // фиксированные объекты

let unlock = true; // блочим повторное нажатие на ссылку попапа, пока он открывается

const timeout = 800; // таже цифра что и в транзишн

// вешаем обработчик на линк отсылающий на попап
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		})
	}
};

// закрытие popup по клику на иконку закрытия
const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup')); // ближайший класс .popup
			e.preventDefault();
		})
	}
};

// функция открытия
function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		// если есть открытый попап и попап находится в нем, мы оставляем бадилок
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) { // при клике на попап контент ничего не произойдет, если клик выше попап закроется
				popupClose(e.target.closest('.popup'));
			}
		});
	}
};

// функция закрытия
// если есть открытый попап и попап находится в нем, мы оставляем бадилок
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

// блокируем сролл бади при открытом попапе
function bodyLock() {
	// избегаем сдвиг контента, скрываем скролл. при открытии попапа.
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
};

// анлок бади + лок скролла на время, чтоб не дергался попап
function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
};

// закрытие попапа по ескейп

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// закрытие на кнопку окей
const popupBtnOkay = document.querySelector('.popup__btn-ok');
if (popupBtnOkay) {
	popupBtnOkay.addEventListener('click', function (e) {
		e.preventDefault();
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	});
};

// полифилы - подгоняют параметры под старые браузеры. 
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойства
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// анимации

const animItems = document.querySelectorAll('._anim-items'); // классы с анимированными элементами

if (animItems.length > 0) {
	document.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight; // получаем высоту объекта
			const animItemOffset = offset(animItem).top; // позиция элемента относительно верха страницы
			const animStart = 4; // коэф, регулирующий момент старта анимации (1/4 высоты объекта, или 1/4 высоты браузера, если объект больше высоты браузера)

			// настройка момента старта
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) { // запрещаем повторную анимацию
					animItem.classList.remove('_active');
				}
			}
		}
	}
	// функция считающая позицию элемента относительно верха страницы (или cлева)
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300)
}

var myHash = location.hash; //получаем значение хеша
location.hash = ''; //очищаем хеш
if (myHash[1] != undefined) { //проверяем, есть ли в хеше какое-то значение
	setTimeout(() => {
		$('html, body').animate({ scrollTop: $(myHash).offset().top }, 500); //скроллим за полсекунды
	}, 500);
};