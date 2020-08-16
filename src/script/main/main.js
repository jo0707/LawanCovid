import DataSource from '../data/data-source.js';
import '../component/main-status/main-status.js';
import '../component/countries/country-list.js';
import '../component/search-bar.js';

const defaultCountry        = "Indonesia";
const dailyStatus           = document.getElementById("dailyStatus");
const countryStatus         = document.getElementById("countryStatus");
const searchElement         = document.querySelector("search-bar");
const countryListElement    = document.querySelector("#countryListContainer"); 

const main  = () => {
    const onButtonSearchClicked = () => {
        let keyword = searchElement.value;
        countryListElement.search(keyword);
        searchElement.scrollIntoView({behavior: 'smooth'});
    };

    searchElement.clickEvent    = onButtonSearchClicked;

    getApiData(null);
    getApiData(defaultCountry);
    getApiCountryList();
};

const getApiData = async(countryName) => {
    try {
        let resultData      = await DataSource.getApiData(countryName);

        if (countryName == null)
            dailyStatus.data    = resultData;
        else 
            countryStatus.data  = resultData;
    } catch (message) {
        if (countryName == null)
            dailyStatus.renderError(message);
    }
}

const getApiCountryList = async() => {
    try {
        let resultList          = await DataSource.getApiCountryList();
        countryListElement.list = resultList;
    } catch (message) {
        console.log(message);
        countryListElement.renderError(message);
    }
}


export default main;
export {getApiData};