class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<h1>Lawan Covid</h1>
                            <h4>Status kasus Covid</h4>`;
  }
}

customElements.define("nav-bar", NavBar);
