import {getApiData} from '../../main/main';

class CountryItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set countryName(countryName) {
        this._countryName   = countryName;
        this.render();
    }

    get countryName() {
        return this._countryName;
    }

    render() {
        this.innerHTML = `<li>${this._countryName}</li>`;
        this.addEventListener("click", () => {
            getApiData(this._countryName);
            document.getElementById("countryStatus")
            .scrollIntoView({behavior: "smooth"});
        });
    }
}

customElements.define("country-item", CountryItem);