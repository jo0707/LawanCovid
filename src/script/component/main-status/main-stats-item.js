class MainStatsItem extends HTMLElement {

    set peopleDataSet(dataSet) {
        this._dataSet   = dataSet;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="main-stats-item card">
        <h3>${this._dataSet.title}</h3>
        <img src=${this._dataSet.image} class="item-image">
        <h5>${this._dataSet.peopleCount.toLocaleString("en-US")} orang</h5>
    </div>`;
    }
}

customElements.define("main-stats-item", MainStatsItem);
