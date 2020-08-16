import './country-item.js';

class CountryList extends HTMLElement {

    set list(list) {
        this._list  = list;
        this.render(this._list);
    }

    search(keyword) {
        let resultList  = [];
        if (this._list != undefined || this._list != null) {
            if (!keyword) 
                this.render(this._list);

            this._list.forEach(country => {
                if (country.toLowerCase()
                .includes(keyword.toLowerCase()))
                resultList.push(country);
            });

            if (resultList.length == 0)
                this.renderError("Negara Tidak Ditemukan...");
            else
                this.render(resultList);
        }
    }

    render(list) {
        this.innerHTML = `
        <div class="card country-container">
            <h3>Daftar Negara</h3>
            <ul id="countryList" class="card country-list">
            </ul>
        </div>`;

        const countryList   = this.querySelector("#countryList");
        list.forEach(country => {
            const countryItem       = document.createElement("country-item");
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