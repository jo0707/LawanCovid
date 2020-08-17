import "./main-stats-list.js";

class MainStatus extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._data = data;

    this.render();
  }

  render() {
    if (this._data == undefined || this._data == null) {
      this.renderError("Memuat...");
      return;
    }

    let titleTemplate = () => {
      if (this._data.title) return this._data.title;
      else return "Jumlah Kasus Hingga Saat Ini";
    };

    this.innerHTML = `<div class="status card">
            <h2>${titleTemplate()}</h2>
            </div>`;

    const dataListElement = document.createElement("main-stats-list");
    dataListElement.data = this._data;
    this.firstChild.appendChild(dataListElement);
  }

  renderError(message) {
    this.innerHTML = `<div class="status card">
            <h5>${message}</h5>
            </div>`;
  }
}

customElements.define("main-status", MainStatus);
