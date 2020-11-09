import MainSLider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Form from './modules/forms';
import ShowInfo from './modules/accordion';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
	new MainSLider({
		container: '.page',
		btns: '.next'
	}).render();

	new MainSLider({
		container: '.moduleapp',
		btns: '.next'
	}).render();

	new MiniSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next',
		activeClass: 'card-active',
		animate: true
	}).init();

	new MiniSlider({
		container: '.modules__content-slider',
		prev: '.modules__info-btns .slick-prev',
		next: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true
	}).init();

	new MiniSlider({
		container: '.feed__slider',
		prev: '.feed__slider .slick-prev',
		next: '.feed__slider .slick-next',
		activeClass: 'feed__item-active',
	}).init();
	
	new VideoPlayer('.showup .play', '.overlay').init();
	new VideoPlayer('.module__video-item .play', '.overlay').init();

	new Difference('.officerold', '.officernew', '.officer__card-item').init();

	new Form('.form').init();

	new ShowInfo('.module__info-show .plus', '.msg').init();

	new Download('.download').init();
});