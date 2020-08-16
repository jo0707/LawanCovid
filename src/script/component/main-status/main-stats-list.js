import './main-stats-item';

class MainStatsList extends HTMLElement {

    constructor() {
        super();

        this.titles = ["Sembuh", "Terinfeksi", "Meninggal"];
        this.images = ["./assets/recovered.png",
                        "./assets/infected.png",
                        "./assets/dead.png"];
    }
    
    set data(data) {
        this._peopleDataCounts  = [
            data.recovered,
            data.infected,
            data.deaths
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._peopleDataCounts.forEach( (peopleCount, i) => {
            const dataItemElement = document.createElement("main-stats-item");
            dataItemElement.peopleDataSet   = {peopleCount: peopleCount, 
                                                title: this.titles[i], 
                                                image: this.images[i]};
            this.appendChild(dataItemElement);
        })
    }
}

customElements.define("main-stats-list", MainStatsList);
