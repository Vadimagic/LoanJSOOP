import SLider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	const slider = new SLider('.page', '.next');

	slider.render();
});