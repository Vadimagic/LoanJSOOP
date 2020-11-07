import MainSLider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo'

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSLider({btns: '.next', page: '.page'});
	slider.render();
	
	const player = new VideoPlayer('.showup .play', '.overlay');
	player.init();
});