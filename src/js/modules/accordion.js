export default class ShowInfo {
	constructor(btn, content) {
		this.btns = document.querySelectorAll(btn);
		this.contents = document.querySelectorAll(content);
	}

	toggleContent() {
		this.contents.forEach(content => {
			content.setAttribute('data-hidden', 'true');
		});

		this.btns.forEach((btn, i) => {
			btn.addEventListener('click', () => {
				console.log(this.contents[i].getAttribute('data-hidden'))
				if (this.contents[i].getAttribute('data-hidden') === 'true') {

					this.contents[i].setAttribute('data-hidden', 'false');
					this.contents[i].classList.add('animated', 'fadeIn');
					this.contents[i].style.display = 'block';
				
				} else {

					this.contents[i].setAttribute('data-hidden', 'true');
					this.contents[i].style.display = 'none';
				
				}
			});
		});
	}

	init() {
		this.toggleContent();
	}
} 