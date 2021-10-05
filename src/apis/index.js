import axios from "axios";

const urlCountries = 'https://api.covid19api.com/countries';
const urlByCountry = 'https://api.covid19api.com/dayone/country';

export const getCountries = () => axios.get(urlCountries);

export const getReportByCountry = (slug) => axios.get(`${urlByCountry}/${slug}`);

export const getMapDataByCountryId = (countryId) =>
  import(
    `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
  );