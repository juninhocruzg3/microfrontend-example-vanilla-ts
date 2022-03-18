class App extends HTMLElement {
	creationDate: Date;
	message: string;

	constructor() {
		super();
		this.creationDate = new Date();
		this.message = `
			<nav>Navegação MFE1</nav>
			<mfe1-example></mfe1-example>
			<footer>Rodapé MFE1</footer>
		`;
	}

	connectedCallback() {
		this.innerHTML = this.message;
	}
}

customElements.define('mfe1-root', App);
