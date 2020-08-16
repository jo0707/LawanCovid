class NavBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML  = `<h1>Lawan Covid</h1>`;
    }

}

customElements.define("nav-bar", NavBar);