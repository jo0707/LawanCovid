class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="search-container">
                <input placeholder="Cari Negara" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Cari</button>
            </div>`;

    const searchButtonElement = this.querySelector("#searchButtonElement");
    searchButtonElement.addEventListener("click", this._clickEvent);

    // adding enter event for search bar
    this.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchButtonElement.click();
      }
    });
  }
}

customElements.define("search-bar", SearchBar);
