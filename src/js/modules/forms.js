export default class Form {
	constructor(forms) {
		this.forms = document.querySelectorAll(forms);
		this.inputs = document.querySelectorAll('input');
		this.message = {
			loading: 'Загрузка...',
			success: 'Спасибо! Скоро мы с вами свяжемся!',
			failure: 'Что-то пошло не так...'
		};
		this.path = 'assets/question.php';
	}

	clearInputs() {
		this.inputs.forEach(input => input.value = '');
	}

	async postData (url, data) {
		let res = await fetch(
			url,
			{
				method: "POST",
				body: data
			}
		);
	}

	init() {
		this.forms.forEach(form => {
			form.addEventListener('submit', (e) => {
				e.preventDefault();

				let statusMessage = document.createElement('div');
				statusMessage.style.cssText = `
					margin-top: 30px;
					font-size: 22px;
					color: #ddd;
				`
				form.parentNode.appendChild(statusMessage);

				statusMessage.textContent = this.message.loading;

				const formData = new FormData(form);

				this.postData(this.path, formData)
					.then(res => {
						console.log(res);
						statusMessage.textContent = this.message.success;
					})
					.catch(() => {
						statusMessage.textContent = this.message.failure;
					})
					.finally(() => {
						this.clearInputs();
						setTimeout(() => {
							statusMessage.remove();
						}, 5000)
					});
			});
		});
	}
}