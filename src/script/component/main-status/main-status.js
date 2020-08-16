import './main-stats-list.js';

class MainStatus extends HTMLElement {

    set data(data) {
        this._data  = data;
        this._title = data.title;

        this.render();
    }

    connectedCallback() {
    }

    render() {
        let titleTemplate = "";
        if (this._title)
            titleTemplate   = this._title;
        else
            titleTemplate   = `status Covid hingga hari ini`;

        this.innerHTML  = `<div class="status card" id="innerStats">
        <h2>${titleTemplate}</h2>
        </div>`;
        
        const dataListElement   = document.createElement("main-stats-list");
        dataListElement.data    = this._data;
        this.querySelector("#innerStats").appendChild(dataListElement);
    }

    renderError(message) {
        this.innerHTML  = `<div class="status card" id="innerStats">
        <h2>${message}</h2>
        </div>`;
    }

}

customElements.define("main-status", MainStatus);