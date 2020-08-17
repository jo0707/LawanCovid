class FooterCredit extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<h6>Web oleh : Joshua Sinaga</h6>`;
  }
}

customElements.define("footer-credit", FooterCredit);
