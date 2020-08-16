import {getApiData} from '../../main/main';

class CountryItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }
    
    get countryName() {
        return this._countryName;
    }

    set countryName(countryName) {
        this._countryName   = countryName;
        this.render();
    }

    render() {
        this.innerHTML = `<p>${this._countryName}</p>`;

        this.addEventListener("click", () => {
            getApiData(this._countryName);
            document.getElementById("countryStatus").scrollIntoView({behavior: "smooth"});
        });
    }
}

customElements.define("country-item", CountryItem);