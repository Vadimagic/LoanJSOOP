import MainSLider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSLider({
		btns: '.next', 
		container: '.page'
	});
	slider.render();

	const showUpSlider = new MiniSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next',
		activeClass: 'card-active',
		animate: true
	});
	showUpSlider.init();

	const modulesSlider = new MiniSlider({
		container: '.modules__content-slider',
		prev: '.modules__info-btns .slick-prev',
		next: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true
	});
	modulesSlider.init();

	const feedSlider = new MiniSlider({
		container: '.feed__slider',
		prev: '.feed__slider .slick-prev',
		next: '.feed__slider .slick-next',
		activeClass: 'feed__item-active',
	});
	feedSlider.init();
	
	const player = new VideoPlayer('.showup .play', '.overlay');
	player.init();
});