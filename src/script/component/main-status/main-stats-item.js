class MainStatsItem extends HTMLElement {

    set peopleDataSet(dataSet) {
        this._dataSet   = dataSet;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="main-stats-item card">
                <h3>${this._dataSet.title}</h3>
                <img src=${this._dataSet.image} 
                class="item-image" alt=${this._dataSet.altText}>
                <h5>${this._dataSet.peopleCount.toLocaleString("en-US")} orang</h5>
            </div>`;
        
        this.firstElementChild.style.backgroundColor = this._dataSet.color;
    }
}

customElements.define("main-stats-item", MainStatsItem);
