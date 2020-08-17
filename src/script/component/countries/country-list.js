import "./country-item.js";

class CountryList extends HTMLElement {
  constructor() {
    super();

    this.asyncSearch = (keyword) => {
      return new Promise((resolve, reject) => {
        let resultList = [];

        if (this._list != undefined || this._list != null) {
          if (!keyword) resolve(this.render(this._list));

          this._list.forEach((country) => {
            if (country.toLowerCase().includes(keyword.toLowerCase()))
              resultList.push(country);
          });

          if (resultList.length > 0) resolve(this.render(resultList));
          else reject("Negara tidak ditemukan...");
        }
      });
    }; // this.asyncSearch
  } // constructor

  connectedCallback() {
    this.render(null);
  }

  set list(list) {
    this._list = list;
    this.render(this._list);
  }

  async search(keyword) {
    this.renderError("Memuat...");

    try {
      await this.asyncSearch(keyword);
    } catch (message) {
      this.renderError(message);
    }
  }

  render(list) {
    if (list == null) {
      this.renderError("memuat...");
      return;
    }

    this.innerHTML = `
            <div class="card country-container">
                <h3>Daftar Negara</h3>
                <div id="countryList" class="card country-list">
                </div>
            </div>`;

    const countryList = this.querySelector("#countryList");

    list.forEach((country) => {
      const countryItem = document.createElement("country-item");
      countryItem.countryName = country;
      countryList.appendChild(countryItem);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <div class="card country-container">
            <h3>Daftar Negara</h3>
            <p>${message}</p>
        </div>`;
  }
}

customElements.define("country-list", CountryList);
