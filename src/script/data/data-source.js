class DataSource {
  static getApiData(countryName) {
    let url = "https://covid19.mathdro.id/api";

    if (countryName != null) url += `/countries/${countryName}`;

    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error && countryName != null)
          return Promise.reject(`Negara ${countryName} tidak ditemukan`);
        else if (responseJson.error && countryName == null)
          return Promise.reject(`Terjadi kesalahan...`);

        const data = {
          recovered: responseJson.recovered.value,
          infected: responseJson.confirmed.value,
          deaths: responseJson.deaths.value,
          title: countryName,
        };

        return Promise.resolve(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getApiCountryList() {
    return fetch("https://covid19.mathdro.id/api/countries")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) return Promise.reject("Gagal Memuat data");

        const countryList = [];

        responseJson.countries.forEach((countryData) => {
          countryList.push(countryData.name);
        });

        return Promise.resolve(countryList);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default DataSource;
