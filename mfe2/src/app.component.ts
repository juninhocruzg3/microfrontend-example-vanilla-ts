class App extends HTMLElement {
	creationDate: Date;
	message: string;

	constructor() {
		super();
		this.creationDate = new Date();
		this.message = `
			<nav>Navegação MFE2</nav>
			<mfe2-example></mfe2-example>
			<footer>Rodapé MFE2</footer>
		`;
	}

	connectedCallback() {
		this.innerHTML = this.message;
	}
}

customElements.define('mfe2-root', App);
