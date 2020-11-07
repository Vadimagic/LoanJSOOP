import SLider from './modules/slider';
import VideoPlayer from './modules/playVideo'

window.addEventListener('DOMContentLoaded', () => {
	const slider = new SLider('.page', '.next');
	slider.render();
	
	const player = new VideoPlayer('.showup .play', '.overlay');
	player.init();
});