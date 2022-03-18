import html from './app.component.html';

class App extends HTMLElement {
	creationDate: Date;

	constructor() {
		super();
		this.creationDate = new Date();
	}

	connectedCallback() {
		this.innerHTML = html;

		const box = document.getElementById('box')!;
		document.getElementById('btn-mfe1')?.addEventListener('click', (event) => {
			import(/*webpackIgnore: true*/ 'http://localhost:8081/index.bundle.js');
			box.innerHTML = `<mfe1-root></mfe1-root>`;
		});
		document.getElementById('btn-mfe2')?.addEventListener('click', (event) => {
			import(/*webpackIgnore: true*/ 'http://localhost:8082/index.bundle.js');
			box.innerHTML = `<mfe2-root></mfe2-root>`;
		});
	}
}

customElements.define('app-root', App);
