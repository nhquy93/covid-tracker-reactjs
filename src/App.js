import { Container, Typography } from '@material-ui/core';
import sortBy from 'lodash.sortby';
import moment from 'moment';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCountries, getReportByCountry } from './apis';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import Footer from './components/Footer';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: 'Infections',
          count: latestData.Confirmed,
          type: 'confirmed'
        },
        {
          title: 'Recovered',
          count: latestData.Recovered,
          type: 'recovered'
        },
        {
          title: 'Deaths',
          count: latestData.Deaths,
          type: 'deaths'
        }
      ];
    }
    return [];
  }, [report]);

  useEffect(() => {
    getCountries()
      .then((res) => {
        const { data } = res;
        const countries = sortBy(data, 'Country');
        setCountries(countries);
        setSelectedCountryId('vn');
      });
  }, []);

  const handleOnChange = useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(country => country.ISO2 === selectedCountryId.toUpperCase());
      getReportByCountry(Slug)
        .then((res) => {
          res.data.pop();

          setReport(res.data);
        });
    }
  }, [countries, selectedCountryId]);

  return (
    <div className="app">
      <Container style={{ marginTop: 30 }}>
        <Typography variant='h2' align='center' component='h2'>
          <strong>STATISTICS DATA COVID-19</strong>
      </Typography>
        <Typography>{moment().format('LLL')}</Typography>
        <CountrySelector
          countries={countries}
          handleOnChange={handleOnChange}
          value={selectedCountryId}
        />
        <Highlight summary={summary} />
        <Summary countryId={selectedCountryId} report={report} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
